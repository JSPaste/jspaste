import Request from '../Request.ts'
import { api } from '../../static/api/v1.ts'

export default async function remove (resource: string, secret: string): Promise<IRemoveResponse> {
  const response = await new Request('DELETE', api.route.documents).remove(resource, secret)

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
