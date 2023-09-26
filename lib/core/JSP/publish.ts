import Request from '../Request.ts'
import { api } from '../../static/api/v1.ts'

export default async function publish (payload: any): Promise<IPublishResponse> {
  const response = await new Request('POST', api.route.documents).publish(String(payload))

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
