import {api, api_route, IAccessRes, IPublishRes, IRemoveRes} from "./bank";
import {Request} from "./Request";

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
     * Removes a previously published resource
     * @example
     * const jsp = new JSP();
     *
     * // I want to delete this data because I do not need it any more...
     * const ack = await jsp.remove("foobar", "hwix.v7yn.w5bu.45yu");
     *
     * if (ack.req.valid) {
     *     // Resource deleted successfully!
     * } else {
     *     // It failed...
     * }
     * @async
     * @param {string} resource Resource identifier
     * @param {string} secret Character string returned when publishing a resource to the API
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