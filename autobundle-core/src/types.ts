export interface AutobundleRequest {
  packageName: string
  version: string
  // package with version
  package: string
  external: string
  minify: boolean
  engine: 'esbuild' | 'ncc'
}

interface IssueFormAttribute {
  label: string
  description: string
}

interface IssueFormBase {
  id: string
  attributes: IssueFormAttribute
  validations?: {
    required: boolean
  }
}

interface IssueFormInput extends IssueFormBase {
  type: 'input'
  attributes: IssueFormAttribute & {
    value?: string
  }
}

interface IssueFormDropdown extends IssueFormBase {
  type: 'dropdown'
  attributes: IssueFormAttribute & {
    options: string[]
  }
}

interface IssueFormCheckboxes extends IssueFormBase {
  type: 'checkboxes'
  attributes: IssueFormAttribute & {
    options: Array<{
      label: string
    }>
  }
}

export interface IssueFormTemplate {
  body: Array<IssueFormInput | IssueFormDropdown | IssueFormCheckboxes>
}
