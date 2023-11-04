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
      url: response.raw.ok ? response.raw.url : null,
      raw: response,
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
    url: string | null
    raw: any
    payload: any
  }
}
