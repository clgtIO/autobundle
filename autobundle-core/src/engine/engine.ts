export type EngineResult = {
  code: string
}
export type Engine = (str: string) => EngineResult
