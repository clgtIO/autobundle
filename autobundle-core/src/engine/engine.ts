// TODO: treat the license
import { AutobundleRequest } from '../types'

export type EngineResult = {
  code: string
}
export type Engine = (entry: string, outfile: string, req: AutobundleRequest) => Promise<EngineResult>
