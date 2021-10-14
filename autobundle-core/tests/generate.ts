import { generatePackage } from '../src/template'


generatePackage({
  packageName: 'ms',
  version: '1.0.0',
  package: 'ms@1.0.0',
  minify: true,
  engine: 'esbuild'
}).then(console.log)
