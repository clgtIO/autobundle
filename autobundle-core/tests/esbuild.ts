import { resolve } from 'path'
import { esbuild } from '../src/engine/esbuild'


esbuild(
  resolve(__dirname, '..', '..', 'autobundle-bundles/ms/1.0.0/index.ts'),
  resolve(__dirname, '..', '..', 'autobundle-bundles/ms/1.0.0/dist/index.js'),
  {
    packageName: 'ms',
    version: '1.0.0',
    package: 'ms@1.0.0',
    minify: false,
    engine: 'esbuild',
    external: '',
  },
).then(console.log)
