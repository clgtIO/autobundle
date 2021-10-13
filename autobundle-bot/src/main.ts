import * as core from '@actions/core'
import * as github from '@actions/github'

async function run (): Promise<void> {
  try {
    console.log(JSON.stringify(github.context.payload.issue))
  } catch (error: any) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
