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

  async access (resource: string): Promise<IAccessResponse> { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    const response = await this.run(this.#endpoint + resource)

    return {
      req: {
        valid: response.raw.ok,
        resource
      },
      res: {
        url: new URL(response.raw.url),
        raw: response.raw,
        payload: response.api.data ?? null
      }
    }
  }

  async publish (payload: any): Promise<IPublishResponse> { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    this.#options.body = payload
    const response = await this.run(this.#endpoint)

    return {
      req: {
        valid: response.raw.ok,
        payload
      },
      res: {
        url: new URL(response.raw.url),
        raw: response.raw,
        resource: response.api.key ?? null,
        secret: response.api.secret ?? null
      }
    }
  }

  async remove (resource: string, secret: string): Promise<IRemoveResponse> { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    this.#options.headers.secret = secret
    const response = await this.run(this.#endpoint + resource)

    return {
      req: {
        valid: response.raw.ok,
        resource,
        secret
      },
      res: {
        raw: response.raw
      }
    }
  }

  /**
   * Reserved exclusively for test suite.
   */
  async _test_fetch (url: string) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
    return await this.run(url)
  }

  private async run (url: string) { // eslint-disable-line @typescript-eslint/explicit-function-return-type
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

export interface IAccessResponse {
  req: {
    valid: boolean
    resource: string
  }
  res: {
    url: URL
    raw: Response
    payload: any
  }
}

export interface IPublishResponse {
  req: {
    valid: boolean
    payload: any
  }
  res: {
    url: URL
    raw: Response
    resource: string | null
    secret: string | null
  }
}

export interface IRemoveResponse {
  req: {
    valid: boolean
    resource: string
    secret: string
  }
  res: {
    raw: Response
  }
}
