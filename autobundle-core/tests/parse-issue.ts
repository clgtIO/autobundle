import { parseRequestBundleContent } from '../src'

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
