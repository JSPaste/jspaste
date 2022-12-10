import {api, api_route, IAccessRes, IPublishRes, IRemoveRes} from "./bank";
import {Request} from "./Request";

/**
 * JSPaste main class, all magic resides here ✨
 * @example
 * // > Initialize an instance each time
 * new JSP().access("foo").then(console.info);
 *
 * // > Initialize an instance and keep it
 * const jsp = new JSP();
 * console.info(await jsp.access("foo"));
 * jsp.access("foobar").then(x => { ... });
 */
export class JSP {
    /**
     * Publish "something" to the API (E.g. server logs, error dumps or configs which need to be backed up temporarily in the cloud for later access)
     *
     * _Uploaded data will not be indexable, **HOWEVER** you **MUST NOT** upload sensitive information_
     * @example
     * // I want to upload a stack trace for later debugging...
     * const ack = await new JSP().publish(err);
     *
     * // > I am interested in saving it in variables
     * const url = ack.res.url;
     * const resource = ack.res.resource;
     * const secret = ack.res.secret;
     *
     * // > I am interested in printing this onto the terminal
     * console.info({ ack.res.url, ack.res.resource, ack.res.secret });
     * @param {any} payload Data to upload
     * @return {Promise<IPublishRes>}
     */
    public async publish(payload: any): Promise<IPublishRes> {
        const res = await new Request(api + api_route.documents).publish(String(payload));
        const body = await res.json();

        return {
            req: {
                valid: res.coreRes.statusMessage === "OK",
                payload: payload
            },
            res: {
                url: api + body.key,
                raw: body,
                resource: body.key,
                secret: body.secret
            }
        }
    }

    /**
     * Retrieves the content of a previously published resource
     *
     * _You need to know the "resource identifier" in order to access it in the API_
     * @example
     * // I want to access the "foo" resource...
     * const ack = await new JSP().access("foo");
     *
     * // > I am interested in saving it in variables
     * const url = ack.res.url;
     * const payload = ack.res.payload;
     *
     * // > I am interested in printing this onto the terminal
     * console.info({ ack.res.payload });
     * @param {string} resource Resource identifier
     * @return {Promise<IAccessRes>}
     */
    public async access(resource: string): Promise<IAccessRes> {
        const res = await new Request(api + api_route.documents).access(resource);
        const body = await res.json();

        return {
            req: {
                valid: res.coreRes.statusMessage === "OK",
                resource: resource
            },
            res: {
                url: api + resource,
                raw: body,
                payload: body.data
            }
        }
    }

    /**
     * Removes the content of a previously published resource
     *
     * _You need to know the "resource identifier" and the "secret" in order to remove it from the API_
     * @example
     * // I want to remove the "foo" resource using the "bar" secret...
     * const ack = await new JSP().remove("foo", "bar");
     *
     * // I check if the resource has been successfully removed...
     * if (ack.req.valid) console.info("Resource removed successfully!");
     * else console.info("Resource removal failed.");
     * @param {string} resource Resource identifier
     * @param {string} secret Owner key which verifies the ownership of a "resource" in the API
     * @return {Promise<IRemoveRes>}
     */
    public async remove(resource: string, secret: string): Promise<IRemoveRes> {
        const res = await new Request(api + api_route.documents).remove(resource, secret);
        const body = await res.json();

        return {
            req: {
                valid: res.coreRes.statusMessage === "OK",
                resource: resource,
                secret: secret
            },
            res: {
                raw: body
            }
        }
    }
}