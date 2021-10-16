import { build, BuildResult, formatMessages, analyzeMetafile } from 'esbuild'
import { Engine } from './engine'

export const esbuild: Engine = async (entry, outfile, req) => {

  let result: BuildResult | undefined

  try {
    result = await build({
      entryPoints: [entry],
      format: 'cjs',
      platform: 'node',
      legalComments: 'inline',
      logLevel: 'error',
      bundle: true,
      metafile: true,
      minify: req.minify,
      external: req.external.split(',').map(pkg => pkg.trim()),
      outfile,
    })
  } catch (error) {
    console.log('error', 'Build failed', error)
    throw error
  }

  // thanks tsup
  if (result && result.warnings) {
    const messages = result.warnings.filter((warning) => {
      if (
        warning.text.includes(
          `This call to "require" will not be bundled because`,
        ) ||
        warning.text.includes(`Indirect calls to "require" will not be bundled`)
      )
        return false

      return true
    })
    const formatted = await formatMessages(messages, {
      kind: 'warning',
      color: true,
    })
    formatted.forEach((message) => {
      console.warn(message)
    })
  }

  // auto write
  return {
    code: '',
    analyze: result.metafile ? await analyzeMetafile(result.metafile) : undefined,
  }
}
