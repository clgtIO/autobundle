import * as process from 'process'
import { AutobundleRequest } from './types'
import * as fs from 'fs'
import * as path from 'path'
import { exec, refinePackageName, toOrgPackageName } from 'autobundle-common'

const INSTALl_TIMEOUT = 60e3 // 1min

export async function generatePackage (request: AutobundleRequest): Promise<string> {
  const packageName = refinePackageName(request.packageName)
  const templateDir = path.resolve(__dirname, '..', 'new-package-template')
  const targetDir = path.resolve(__dirname, '..', '..', 'autobundle-bundles', packageName)
  const targetDirWithVersion = path.resolve(targetDir, request.version)

  try {
    // create if not exist
    await fs.promises.mkdir(targetDir)

    // delete if exist
    await fs.promises.rmdir(targetDirWithVersion)
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

  await fs.promises.writeFile(indexPath, indexFile.toString().replace(/new-package-template/, request.packageName))
  await fs.promises.writeFile(pkgPath, JSON.stringify(pkg, null, 2))

  return targetDirWithVersion
}
