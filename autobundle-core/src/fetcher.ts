import tmp from 'tmp-promise'
import { extract } from 'pacote'

// pkg could go with version, package@1.0.0
export async function fetchPackage (pkg: string): Promise<[string, () => Promise<void>]> {

  const op = await tmp.dir()

  await extract(pkg, op.path)

  return [op.path, async () => {
    await op.cleanup()
  }]
}
