import { exec, jsonify, refinePackageName, toOrgPackageName } from 'autobundle-common'
import * as fs from 'fs'
import * as path from 'path'
import { AutobundleRequest, BundlesFile } from './types'

const INSTALl_TIMEOUT = 60e3 // 1min
const BUNDLED_PACKAGE_START_COMMENT = '<!--BUNDLED_PACKAGE_START-->'
const BUNDLED_PACKAGE_END_COMMENT = '<!--BUNDLED_PACKAGE_END-->'
const bundlesJSONPath = path.resolve(__dirname, '..', '..', 'autobundle-bundles/bundles.json')
// because this context is the request, we could load json at first
const bundles = require(bundlesJSONPath) as BundlesFile

export async function generatePackagesSection () {
  // root readme file
  const readmePath = path.resolve(__dirname, '..', '..', 'README.md')
  const readmeFile = await fs.promises.readFile(readmePath)

  const packages = bundles.packages.reduce((pkgs, pkg) => {
    return [...pkgs, ...pkg.versions.map(version => {
      const npmLink = `[![NPM Link](https://img.shields.io/static/v1?label=npm&message=npm&color=green)](https://www.npmjs.com/package/${toOrgPackageName(pkg.name)})`
      return `- [${pkg.name}@${version.version}](./autobundle-bundles/${pkg.name}/${version.version}): ${version.size} ${npmLink}`
    })]
  }, [] as string[])

  const packagesSection = packages.join('\n')

  const readme = readmeFile.toString()
  await fs.promises.writeFile(
    readmePath,
    readme.replace(
      readme.slice(
        readme.indexOf(BUNDLED_PACKAGE_START_COMMENT),
        readme.indexOf(BUNDLED_PACKAGE_END_COMMENT) + BUNDLED_PACKAGE_END_COMMENT.length,
      ),
      `${BUNDLED_PACKAGE_START_COMMENT}\n${packagesSection}\n${BUNDLED_PACKAGE_END_COMMENT}`,
    ),
  )
}

export async function updateVersionForPackages (req: AutobundleRequest, version: string, size: string) {
  let pkg = bundles.packages.find(pkg => pkg.name === req.packageName)
  if (!pkg) {
    pkg = { name: req.packageName, versions: [] }
    bundles.packages.push(pkg)
  }

  let pkgVersion = pkg.versions.find(v => v.version === version)
  if (!pkgVersion) {
    pkgVersion = { version, size }
    pkg.versions.push(pkgVersion)
  }

  bundles.packages[bundles.packages.indexOf(pkg)] = pkg
  await fs.promises.writeFile(bundlesJSONPath, jsonify(bundles))
}

export async function generatePackage (request: AutobundleRequest): Promise<string> {
  const packageName = refinePackageName(request.packageName)
  const templateDir = path.resolve(__dirname, '..', 'new-package-template')
  const targetDir = path.resolve(__dirname, '..', '..', 'autobundle-bundles', packageName)
  const targetDirWithVersion = path.resolve(targetDir, request.version)

  try {
    // create if not exist
    await fs.promises.mkdir(targetDir)

    // delete if exist
    await fs.promises.rm(targetDirWithVersion, { recursive: true, force: true })
  } catch (e) {
  }

  await fs.promises.cp(templateDir, targetDirWithVersion, { recursive: true })

  // thanks package-build-stats for the flags
  const flags = [
    'ignore-flags',
    'ignore-engines',
    'skip-integrity-check',
    'exact',
    'json',
    'no-progress',
    'silent',
    'no-lockfile',
    'no-bin-links',
    'no-audit',
    'no-fund',
    'ignore-optional',
  ]
  const command = `yarn add ${request.package}  --${flags.join(' --')}`

  await exec(command, { cwd: targetDirWithVersion, maxBuffer: 1024 * 500 }, INSTALl_TIMEOUT)

  const pkgPath = path.resolve(targetDirWithVersion, 'package.json')
  const pkg = require(pkgPath)

  pkg.name = toOrgPackageName(packageName)
  pkg.version = pkg.dependencies[request.packageName]

  const indexPath = path.resolve(targetDirWithVersion, 'index.ts')
  const readmePath = path.resolve(targetDirWithVersion, 'README.md')
  const indexDefPath = path.resolve(targetDirWithVersion, 'dist/index.d.ts')
  const indexFile = await fs.promises.readFile(indexPath)
  const readme = await fs.promises.readFile(readmePath)

  await fs.promises.writeFile(indexPath, indexFile.toString().replace(/new-package-template/, request.packageName))
  await fs.promises.writeFile(readmePath, readme.toString().replace(/{{PACKAGE_NAME}}/, request.packageName))
  await fs.promises.writeFile(pkgPath, jsonify(pkg))
  // index.d.ts file
  await fs.promises.writeFile(indexDefPath, `export * from '${request.packageName}'`)

  // move to exact version dir instead of "latest" name
  const exactVersionDir = path.resolve(targetDir, pkg.version)

  if (targetDirWithVersion !== exactVersionDir) {
    await fs.promises.cp(targetDirWithVersion, exactVersionDir, { recursive: true })
    await fs.promises.rm(targetDirWithVersion, { recursive: true, force: true })
  }

  return exactVersionDir
}
