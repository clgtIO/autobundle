import * as fs from 'fs'
import * as Yaml from 'js-yaml'
import * as marked from 'marked'
import * as path from 'path'
import { AutobundleRequest, IssueFormTemplate } from './types'

const NPM_PACKAGE_NAME_RE = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/

// TODO: make this function as separate package (for example: parse-issue-form-template)
//      and because we can move it to another package, let write it more generally

const bundleRequestTemplate = Yaml.load(fs.readFileSync(path.resolve(__dirname, '..', '..', '.github/ISSUE_TEMPLATE/1-request-bundle.yml')).toString()) as IssueFormTemplate

// parseRequestBundleContent is parser for request bundle issue
// it parse markdown and map the content to issue form schema
export function parseRequestBundleContent (content: string): AutobundleRequest | false {

  const form: Record<string, string | { [key: string]: string | boolean }> = {}

  const tokens = marked.lexer(content)

  const walker = (token: marked.Token) => {
    if (token.type === 'heading') {
      const item = bundleRequestTemplate.body.find(bodyItem => bodyItem.attributes.label === token.text)
      if (item) {
        const children: marked.Token[] = []

        for (let i = tokens.indexOf(token) + 1; i < tokens.length; i++) {
          // stop if reach next heading
          if (tokens[i].type === 'heading') {
            break
          }
          children.push(tokens[i])
        }

        switch (item.type) {
          case 'input': {
            marked.walkTokens(children, child => {
              if (child.type === 'text') {
                form[item.id] = child.text
              }
            })
            break
          }
          case 'checkboxes': {
            marked.walkTokens(children, child => {
              if (child.type === 'list') {
                const options = form[item.id] = {} as Record<string, boolean>

                // loop and set listItem to above object
                child.items.forEach(listItem => {
                  const option = item.attributes.options.find(opt => opt.label === listItem.text)
                  if (option) {
                    options[option.label] = listItem.checked || false
                  }
                })
              }
            })
            break
          }
          case 'dropdown': {
            marked.walkTokens(children, child => {
              if (child.type === 'text') {
                form[item.id] = child.text
              }
            })
            break
          }
        }
      }
    }
  }

  marked.walkTokens(tokens, walker)

  if (!form.packageName || !form.version || !form.engine || !form.options) {
    return false
  }

  // we don't want user put the invalid packageName to code, which can break the next flow
  if (!NPM_PACKAGE_NAME_RE.test(form.packageName as string)) {
    return false
  }

  const { minify } = form.options as Record<string, boolean>

  return {
    packageName: form.packageName as string,
    version: form.version as string,
    package: `${form.packageName}@${form.version}`,
    engine: form.engine as AutobundleRequest['engine'],
    minify: minify,
  }
}
