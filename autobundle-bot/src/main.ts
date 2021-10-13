import * as core from '@actions/core'
import * as github from '@actions/github'
import { parseRequestBundleContent } from 'autobundle-core'
import { addComment, toMarkdownCode } from 'autobundle-common'

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

  } catch (error: any) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
