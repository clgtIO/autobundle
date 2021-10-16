# Autobundle

Automatic pack your dependency in a bundle, publish it to NPM, powered by esbuild and ncc.

## Story
Have you ever care about which modules that your app included,
**Autobundle** help you make a bundle from your dependency, read below for the benefits.
Or if you is a bundlephobia, this is exactly built for you.

## The benefits
- Pack all modules of dependency into one file
- Generally faster bootup time and less I/O overhead (in node platform or webpack/etc. bundler)
- Tree-shake your dependency
- Understand how large of your dependency
- Minimal **node_modules**
- You don't need to create new repository, new package, publish it, etc. Just for bundle job, it's easier with autobundle

# How it works
Same [bundlephobia.com](https://bundlephobia.com), **Autobundle** use technology like esbuild, webpack to bundling your dependency and automatic publish
to NPM registry.

## Getting started
Go to [New Issue](https://github.com/clgtIO/autobundle/issues/new/choose) and request

- Note 1: We highly recommend you only bundle the dependency connect a little dependencies (or the core package), because all dependencies will put into the bundle.
You should test again after bundling the package.
- Note 2: This will also power off the tree-shakeable of dependency.

## Bundled packages

<!--BUNDLED_PACKAGE_START-->
- [express@5.0.0-alpha.8](./autobundle-bundles/express/5.0.0-alpha.8): 806 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/express)
- [express@4.17.1](./autobundle-bundles/express/4.17.1): 795 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/express)
- [pg@8.7.1](./autobundle-bundles/pg/8.7.1): 107 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/pg)
- [ms@1.0.0](./autobundle-bundles/ms/1.0.0): 1.97 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/ms)
- [injection-js@2.4.0](./autobundle-bundles/injection-js/2.4.0): 30.3 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/injection-js)
- [injection-js@2.3.2](./autobundle-bundles/injection-js/2.3.2): 29.7 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/injection-js)
- [path-to-regexp@6.2.0](./autobundle-bundles/path-to-regexp/6.2.0): 6.01 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/path-to-regexp)
- [@crawlo/graphql@1.0.28](./autobundle-bundles/@crawlo/graphql/1.0.28): 261 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/@crawlo/graphql)
- [intl-number-input@1.0.0](./autobundle-bundles/intl-number-input/1.0.0): 11.3 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/intl-number-input)
- [puppeteer-core@10.4.0](./autobundle-bundles/puppeteer-core/10.4.0): 403 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/puppeteer-core)
- [puppeteer-core@1.7.0](./autobundle-bundles/puppeteer-core/1.7.0): 441 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/puppeteer-core)
- [playwright-core@1.15.2](./autobundle-bundles/playwright-core/1.15.2): 1.15 MB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/playwright-core)
- [class-validator@0.13.1](./autobundle-bundles/class-validator/0.13.1): 313 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/class-validator)
- [graphql-request@3.6.0](./autobundle-bundles/graphql-request/3.6.0): 179 kB [![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/@autobundle/graphql-request)
<!--BUNDLED_PACKAGE_END-->

## TODO
- create definition file (d.ts) file (currently esbuild not supported)
- ncc engine
- flow: test if the generated package is installable
- "sideEffects" option 
- comment the externals suggestion when failed

# Contributing

See [Contributing](./CONTRIBUTING.md)
