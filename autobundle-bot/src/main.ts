import * as core from '@actions/core'
import * as github from '@actions/github'
import { esbuild, generatePackage, parseRequestBundleContent } from 'autobundle-core'
import {
  addComment, BUNDLE_RELEASED_LABEL, exec, FAILED_TO_RELEASE_LABEL, ORG_NAME, prettyBytes, refinePackageName, REPO_NAME,
  REQUEST_BUNDLE_LABEL, toMarkdownCode,
} from 'autobundle-common'
import * as fs from 'fs'
import * as path from 'path'

async function run (): Promise<void> {
  const issue = github.context.payload.issue

  const inputs = {
    token: core.getInput('token', { required: true }),
    npmToken: core.getInput('npmToken', { required: true }),
  }

  if (!issue || !inputs.token) {
    const msg = 'Input is invalid'
    core.error(msg)
    core.setFailed(msg)
    return
  }

  const octokit = github.getOctokit(inputs.token)

  try {

    const issueContent = issue.body || ''
    const request = parseRequestBundleContent(issueContent)

    if (!request) {
      const comment = `
Hi
Your request is invalid, could you check it again?

## Request detail:
${toMarkdownCode(JSON.stringify(request, null, 4))}
      `
      await addComment(issue.number, comment)
      throw new Error('Unable to parse issue content')
    }

    const comment = `
Hi @${github.context.issue.owner}
Thanks for create request for Autobundle
Your request is processing, please rechecking this issue after 30 seconds.

## Request detail:
${toMarkdownCode(JSON.stringify(request, null, 4))}
      `
    await addComment(issue.number, comment)

    const pkgDir = await generatePackage(request)
    const indexFile = path.resolve(pkgDir, 'index.ts')
    const outfile = path.resolve(pkgDir, 'dist/index.js')

    switch (request.engine) {
      case 'esbuild': {
        await esbuild(indexFile, outfile, request)
        break
      }
      default: {
        console.log('not supported yet')
        break
      }
    }

    await exec(`git remote set-url origin https://ducan-ne:${inputs.token}@github.com/clgtIO/autobundle.git`, {
      cwd: process.cwd(),
    }, 2e3)
    await exec(`git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"`, { cwd: process.cwd() }, 1e3)
    await exec(`git config --global user.name "github-actions[bot]"`, { cwd: process.cwd() }, 1e3)
    // workaround for disable git hooks
    await exec('rm -rf .git/hooks/*', { cwd: process.cwd() }, 2e3)

    try {
      await exec(`git add autobundle-bundles`, {
        cwd: process.cwd(),
      }, 5e3)
      await exec(`git commit -m "feat(${request.packageName}): add version ${request.version}"`, {
        cwd: process.cwd(),
      }, 5e3)
      await exec(`git push`, {
        cwd: process.cwd(),
      }, 5e3)
    } catch (e: any) {
      // skip if nothing changed
    }

    await exec(`echo "//registry.npmjs.org/:_authToken=${inputs.npmToken}" > ~/.npmrc`, { cwd: pkgDir })
    await exec('npm publish --access public', {
      cwd: pkgDir,
    }, 30e3)

    const outfileStat = await fs.promises.stat(outfile)

    const completedComment = `
Package ${request.package} has been published:
https://www.npmjs.com/package/@autobundle/${refinePackageName(request.packageName)}

### Bundle size: ${prettyBytes(outfileStat.size)}

We are going to close this request, please reopen if have any issue
      `
    await addComment(issue.number, completedComment)

    await octokit.rest.issues.update({
      owner: ORG_NAME,
      repo: REPO_NAME,
      issue_number: issue.number,
      labels: [REQUEST_BUNDLE_LABEL, BUNDLE_RELEASED_LABEL],
      state: 'closed'
    })

  } catch (error: any) {
    try {
      const notifyCmt = `
The execution failed, please check logs for more details
https://github.com/clgtIO/autobundle/actions/runs/${github.context.runId}

cc @ducan-ne
      `
      await addComment(issue!.number, notifyCmt)
    } catch (err) {
      console.error('add comment failed', err)
    }

    await octokit.rest.issues.update({
      owner: ORG_NAME,
      repo: REPO_NAME,
      issue_number: issue.number,
      labels: [REQUEST_BUNDLE_LABEL, FAILED_TO_RELEASE_LABEL],
    })

    core.error(error)
    core.setFailed(error.message)
  }
}

run()
