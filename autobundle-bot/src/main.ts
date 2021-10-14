import * as core from '@actions/core'
import * as github from '@actions/github'
import { esbuild, generatePackage, parseRequestBundleContent } from 'autobundle-core'
import { addComment, exec, prettyBytes, toMarkdownCode } from 'autobundle-common'
import * as fs from 'fs'
import * as path from 'path'

async function run (): Promise<void> {
  try {
    const inputs = {
      token: core.getInput('token', { required: true }),
    }

    const issue = github.context.payload.issue
    if (!issue) {
      throw new Error('invalid input')
    }

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
Hi
Thanks for create issue for Autobundle
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
    await exec('rm -rf .git/hooks/*', { cwd: process.cwd() }, 2e3)
    await exec(`git commit -m "feat(${request.packageName}): add version ${request.version}" -a -n --author="github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>"`, {
      cwd: process.cwd(),
    }, 5e3)
    await exec(`git push`, {
      cwd: process.cwd(),
    }, 5e3)

    const outfileStat = await fs.promises.stat(outfile)

    const completedComment = `
Package ${request.package} has been released

### Bundle size: ${prettyBytes(outfileStat.size)}
      `
    await addComment(issue.number, completedComment)

  } catch (error: any) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
