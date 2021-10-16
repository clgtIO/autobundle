# Autobundle

Automatic pack your dependency in a bundle, powered by esbuild

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

# How it works
Same [bundlephobia.com](https://bundlephobia.com), **Autobundle** use technology like esbuild, webpack to bundling your dependency and automatic publish
to NPM registry.

## Getting started
Go to [New Issue](https://github.com/clgtIO/autobundle/issues/new/choose) and request

Note: we highly recommend you only bundle the dependency connect a little dependencies (or the core package), because all dependencies will put into the bundle.
You should test again after bundling the package.   

## Published packages

<!--PUBLISHED_PACKAGE_START-->
[express@5.0.0-alpha.8](./autobundle-bundles/express/5.0.0-alpha.8): 806 kB
[express@4.17.1](./autobundle-bundles/express/4.17.1): 795 kB
[pg@8.7.1](./autobundle-bundles/pg/8.7.1): 107 kB
[ms@1.0.0](./autobundle-bundles/ms/1.0.0): 1.97 kB
[injection-js@2.4.0](./autobundle-bundles/injection-js/2.4.0): 30.3 kB
[injection-js@2.3.2](./autobundle-bundles/injection-js/2.3.2): 29.7 kB
[path-to-regexp@6.2.0](./autobundle-bundles/path-to-regexp/6.2.0): 6.01 kB
[@crawlo/graphql@1.0.28](./autobundle-bundles/@crawlo/graphql/1.0.28): 261 kB
[intl-number-input@1.0.0](./autobundle-bundles/intl-number-input/1.0.0): 11.3 kB
<!--PUBLISHED_PACKAGE_END-->

## TODO
- create definition file (d.ts) file (currently esbuild not supported)
- ncc engine
- flow: test if the generated package is installable 

# Contributing

See [Contributing](./CONTRIBUTING.md)
