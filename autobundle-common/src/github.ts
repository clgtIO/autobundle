import * as core from '@actions/core'
import * as github from '@actions/github'
import { ORG_NAME, REPO_NAME } from './properties'

/**
 * Adds a comment on a Issue
 */
export async function addComment (issue: number, body: string): Promise<any> {
  const token = core.getInput('token', { required: true })
  const octokit = github.getOctokit(token)

  return octokit.rest.issues.createComment({
    owner: ORG_NAME,
    repo: REPO_NAME,
    issue_number: issue,
    body,
  })
}
