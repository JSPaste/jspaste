import Request from '../Request.ts'
import { api } from '../../static/api/v1.ts'

export default async function access (resource: string): Promise<IAccessResponse> {
  const response = await new Request('GET', api.route.documents).access(resource)

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
