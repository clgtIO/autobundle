Thanks for looking to help 👋. Have a nice time contributing to Autobundle.
If you've any queries regarding setup or contributing, feel free to open an issue.
I'll try my best to answer as soon as I can.

This project is built with monorepo structure

These is 5 packages:
- autobundle-bot: bot package which interactive with github event
- autobundle-common: utilities and common function
- autobundle-core: the core, including template generator, issue request parser, etc.
- autobundle-bundles: contains released packaged, bundles state which write to README.md file.
- autobundle-docs: markdown files for docs. In the future we can setting up the docs site based from it.

## Git branching
We want to keep it as simplest, please use your choice.

## Git Commit Message Convention

> This is adapted from [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular).

#### TL;DR:

Messages must be matched by the following regex:

``` js
/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\(.+\))?: .{1,50}/
```

## TODO: bundles.json

The CONTRIBUTING docs is not yet completed, I will update it soon.
You can explode the code ^^.
