import access, { IAccessResponse } from './core/JSP/access.ts'
import publish, { IPublishResponse } from './core/JSP/publish.ts'
import remove, { IRemoveResponse } from './core/JSP/remove.ts'

export default class JSP {
  publish = async (payload: any): Promise<IPublishResponse> => await publish(payload)
  access = async (resource: string): Promise<IAccessResponse> => await access(resource)
  remove = async (resource: string, secret: string): Promise<IRemoveResponse> => await remove(resource, secret)
}
