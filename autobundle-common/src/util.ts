import pb from 'pretty-bytes'

export const toMarkdownCode = (str: string, type = '') => ('```' + type + '\n') + str + '\n```'

// ex: @fb/app => fb_app
export const refinePackageName = (name: string) => {
  const scopedName = name
    .replace(/@/, '')
    .replace(/\//, '_')

  return `${scopedName}`
}

export const toOrgPackageName = (name: string) => {
  return `@autobundle/${name}`
}

export const prettyBytes = (bytes: number) => pb(bytes)
