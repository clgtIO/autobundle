// Invoked on the commit-msg git hook by yorkie.

const chalk = require('chalk')
const msg = require('fs')
  .readFileSync('.git/COMMIT_EDITMSG', 'utf-8')
  .trim()

const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg) && !/Merge branch/.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
    chalk.red(
      `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
    ) +
    `    ${chalk.green(`feat(bot): add somthing`)}\n` +
    `    ${chalk.green(
      `fix: somthing (close #1)`
    )}\n\n` +
    chalk.red(`  See .github/commit-convention.md for more details.\n`)
  )
  process.exit(1)
}
