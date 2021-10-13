// testing api purpose
import * as github from '@actions/github'

async function test () {
  const octo = await github.getOctokit(process.env.TOKEN, {
    baseUrl: 'https://api.github.com'
  })
  console.log(await octo.rest.issues.get({
    owner: 'clgtIO',
    repo: 'autobundle',
    issue_number: 1,
  }))
}

test()
