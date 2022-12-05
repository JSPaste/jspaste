import {api, default_api_url, IAccessRes, IPublishRes, IRemoveRes} from "./bank.js";
import {Request} from "./Request.js";

/**
 * JSP (AKA JSPaste) class
 * @example
 * // Create a JSP instance
 * const jsp = new JSP();
 * @public
 * @class
 * @type {JSP}
 */
export class JSP {
    /**
     * Publish a resource.
     *
     * *Uploaded data will not be indexable, **HOWEVER** you **MUST NOT** upload sensitive data.*
     * @example
     * const jsp = new JSP();
     *
     * // I wish to upload "lots of" data temporarily...
     * const ack = await jsp.publish("Lorem ipsum dolor sit amet ...");
     *
     * // I am interested in saving this information...
     * const resource = ack.res.resource;
     * const secret = ack.res.secret;
     * @async
     * @param {any} payload Data to upload
     * @return {Promise<IPublishRes>}
     */
    public async publish(payload: any): Promise<IPublishRes> {
        const req = await new Request(default_api_url + api.documents).publish(String(payload))
        const body: any = await req.json()

        return {
            req: {
                valid: req.ok,
                payload: payload,
            },
            res: {
                url: default_api_url + body.key,
                raw: body,
                resource: body.key,
                secret: body.secret
            }
        }
    }

    /**
     * Access a previously published resource
     * @example
     * const jsp = new JSP();
     *
     * // I wish to retrieve data from the resource "foo"...
     * const ack = await jsp.access("foobar");
     *
     * // I keep the obtained information...
     * const payload = ack.res.payload;
     * @async
     * @param {string} resource Resource identifier
     * @return {Promise<IAccessRes>}
     */
    public async access(resource: string): Promise<IAccessRes> {
        const req = await new Request(default_api_url + api.documents).access(resource)
        const body: any = await req.json()

        return {
            req: {
                valid: req.ok,
                resource: resource
            },
            res: {
                url: default_api_url + resource,
                raw: body,
                payload: body.data
            }
        }
    }

    /**
     * Removes a previously published resource
     * @example
     * const jsp = new JSP();
     *
     * // I want to delete this data because I do not need it any more...
     * const ack = await jsp.remove("foobar", "hwix.v7yn.w5bu.45yu");
     *
     * if (ack.req.valid) {
     *     // Resource deleted :D
     * } else {
     *     // It failed :(
     * }
     * @async
     * @param {string} resource Resource identifier
     * @param {string} secret Character string returned when publishing a resource to the API
     * @return {Promise<IRemoveRes>}
     */
    public async remove(resource: string, secret: string): Promise<IRemoveRes> {
        const req = await new Request(default_api_url + api.documents).remove(resource, secret)
        const body: any = await req.json()

        return {
            req: {
                valid: req.ok,
                resource: resource,
                secret: secret
            },
            res: {
                raw: body
            }
        }
    }
}