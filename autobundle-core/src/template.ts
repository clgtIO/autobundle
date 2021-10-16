import * as process from 'process'
import { AutobundleRequest, BundlesFile } from './types'
import * as fs from 'fs'
import * as path from 'path'
import { exec, jsonify, refinePackageName, toOrgPackageName } from 'autobundle-common'

const INSTALl_TIMEOUT = 60e3 // 1min
const PUBLISHED_PACKAGE_START_COMMENT = '<!--PUBLISHED_PACKAGE_START-->'
const PUBLISHED_PACKAGE_END_COMMENT = '<!--PUBLISHED_PACKAGE_END-->'
const bundlesJSONPath = path.resolve(__dirname, '..', '..', 'autobundle-bundles/bundles.json')
// because this context is the request, we could load json at first
const bundles = require(bundlesJSONPath) as BundlesFile

export async function generatePackagesSection () {
  // root readme file
  const readmePath = path.resolve(__dirname, '..', '..', 'README.md')
  const readmeFile = await fs.promises.readFile(readmePath)

  const packages = bundles.packages.reduce((pkgs, pkg) => {
    return [...pkgs, ...pkg.versions.map(
      version => `[${pkg.name}@${version.version}](./autobundle-bundles/${pkg.name}/${version.version}): ${version.size}`,
    )]
  }, [] as string[])

  const packagesSection = packages.join('\n')

  const readme = readmeFile.toString()
  await fs.promises.writeFile(
    readmePath,
    readme.replace(
      readme.slice(
        readme.indexOf(PUBLISHED_PACKAGE_START_COMMENT),
        readme.indexOf(PUBLISHED_PACKAGE_END_COMMENT) + PUBLISHED_PACKAGE_END_COMMENT.length,
      ),
      `${PUBLISHED_PACKAGE_START_COMMENT}\n${packagesSection}\n${PUBLISHED_PACKAGE_END_COMMENT}`,
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
  const command = `yarn add ${request.package} -D  --${flags.join(' --')}`

  await exec(command, { cwd: targetDirWithVersion, maxBuffer: 1024 * 500 }, INSTALl_TIMEOUT)

  const pkgPath = path.resolve(targetDirWithVersion, 'package.json')
  const pkg = require(pkgPath)

  pkg.name = toOrgPackageName(packageName)
  pkg.version = pkg.devDependencies[request.packageName]

  const indexPath = path.resolve(targetDirWithVersion, 'index.ts')
  const indexFile = await fs.promises.readFile(indexPath)
  const readmePath = path.resolve(targetDirWithVersion, 'README.md')
  const readme = await fs.promises.readFile(readmePath)

  await fs.promises.writeFile(indexPath, indexFile.toString().replace(/new-package-template/, request.packageName))
  await fs.promises.writeFile(readmePath, readme.toString().replace(/{{PACKAGE_NAME}}/, request.packageName))
  await fs.promises.writeFile(pkgPath, jsonify(pkg))

  // move to exact version dir instead of "latest" name
  const exactVersionDir = path.resolve(targetDir, pkg.version)

  await fs.promises.cp(targetDirWithVersion, exactVersionDir, { recursive: true })
  await fs.promises.rm(targetDirWithVersion, { recursive: true, force: true })

  return exactVersionDir
}
