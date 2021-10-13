import { parseRequestBundleContent } from '../src/issue-parser'

console.log(parseRequestBundleContent(`
### NPM package name

ms

### Version

latest

### Bundler

esbuild

### Bundle options

- [X] minify
`))
