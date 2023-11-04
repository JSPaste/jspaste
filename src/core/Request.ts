import { api } from '../static/api/v1.ts'
import JSPError from './JSPError.ts'

/**
 * @internal
 */
export default class Request {
  readonly #endpoint
  readonly #options: any

  constructor (method: TMethod, route?: string) {
    this.#endpoint = api.url + (route ?? '')
    this.#options = {
      method,
      headers: { 'User-Agent': 'JSPaste' }
    }
  }

  async access (resource: string) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    return await this.run(this.#endpoint + resource)
  }

  async publish (payload: any) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    this.#options.body = payload
    return await this.run(this.#endpoint)
  }

  async remove (resource: string, secret: string) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    this.#options.headers.secret = secret
    return await this.run(this.#endpoint + resource)
  }

  /**
   * Reserved exclusively for test suite.
   */
  async _test_fetch (url: string) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    return await this.run(url)
  }

  private async run (url: string): Promise<{ api: any, raw: Response }> {
    try {
      const response = await fetch('https://' + url, this.#options)

      return {
        api: (response.headers.get('Content-Type')?.includes('application/json') ?? false) ? await response.json() : {},
        raw: response
      }
    } catch (err) {
      throw new JSPError('APIError', err as string)
    }
  }
}

/**
 * @internal
 */
export type TMethod = 'GET' | 'POST' | 'DELETE'
