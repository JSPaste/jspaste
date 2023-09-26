import { api } from '../static/api/v1.ts'
import JSPError from './JSPError.ts'

export default class Request {
  readonly #endpoint
  readonly #method
  readonly #headers: any

  constructor (method: TMethod, route?: string) {
    this.#endpoint = api.url + (route ?? '')
    this.#method = method
    this.#headers = { 'User-Agent': 'JSPaste' }
  }

  async access (resource: string) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    const options = {
      method: this.#method,
      headers: this.#headers
    }

    return await this.run(this.#endpoint + resource, options)
  }

  async publish (payload: any) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    const options = {
      method: this.#method,
      body: payload,
      headers: this.#headers
    }

    return await this.run(this.#endpoint, options)
  }

  async remove (resource: string, secret: string) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    this.#headers.secret = secret

    const options = {
      method: this.#method,
      headers: this.#headers
    }

    return await this.run(this.#endpoint + resource, options)
  }

  /**
   * @internal
   */
  async _test_run (url: string, badUA: boolean = false) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    if (badUA) this.#headers['User-Agent'] = 'null'

    const options = {
      method: this.#method,
      headers: this.#headers
    }

    return await this.run(url, options)
  }

  private async run (url: string, options: any) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    try {
      const response = await fetch('https://' + url, options)

      return {
        api: (response.headers.get('Content-Type')?.includes('application/json') ?? false) ? await response.json() : {},
        raw: response
      }
    } catch (err) {
      throw new JSPError('APIError', err as string)
    }
  }
}

export type TMethod = 'GET' | 'POST' | 'DELETE'
