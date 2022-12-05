import {api, default_api_url} from "./bank.js";
import {Request} from "./Request.js";

interface AccessResponse {
    req: {
        valid: boolean,
        resource: string
    },
    res: {
        raw: object,
        url: string,
        payload: any
    }
}

interface PublishResponse {
    req: {
        valid: boolean,
        payload: any
    },
    res: {
        raw: object,
        url: string,
        resource: string,
        secret: string
    }
}

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
     * @return {Promise<AccessResponse>}
     */
    public async access(resource: string): Promise<AccessResponse> {
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
     * @return {Promise<PublishResponse>}
     */
    public async publish(payload: any): Promise<PublishResponse> {
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
}