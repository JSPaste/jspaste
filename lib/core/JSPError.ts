/**
 * @internal
 */
export default class JSPError extends Error {
  constructor (type: TError, description: string, err?: string) {
    super(description + (err ? '\n' + err : '')) // eslint-disable-line @typescript-eslint/strict-boolean-expressions
    this.name = 'JSP' + type
  }
}

/**
 * @internal
 */
type TError = 'InternalError' | 'APIError'
