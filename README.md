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
Like [bundlephobia.com](https://bundlephobia.com) **Autobundle** use technology like esbuild, webpack to bundling your dependency and automatic publish
to NPM registry.

## Getting started
Go to [New Issue](https://github.com/clgtIO/autobundle/issues/new/choose) and request 

### Published packages

<!--PUBLISHED_PACKAGE-->

### TODO
- create definition file (d.ts) file (currently esbuild not supported)
- ncc engine
- flow: test if the generated package is installable 
