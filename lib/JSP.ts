import {api, default_api_url, version_semver} from "./bank.js";
import {Request} from "./Request.js";

interface JSPMethods {
    /**
     * Access a previously published resource
     * @example
     * const jsp = new JSP();
     *
     * // I wish to retrieve data from the resource "foo"...
     * const ack = await jsp.api.access("foobar");
     *
     * // I keep the obtained information...
     * const payload = ack.res.payload;
     * @async
     * @param {string} resource Resource identifier
     * @return {Promise<AccessResponse>}
     */
    access: (resource: string) => Promise<AccessResponse>,

    /**
     * Publish a resource.
     *
     * *Uploaded data will not be indexable, **HOWEVER** you **MUST NOT** upload sensitive data.*
     * @example
     * const jsp = new JSP();
     *
     * // I wish to upload "lots of" data temporarily...
     * const ack = await jsp.api.publish("Lorem ipsum dolor sit amet ...");
     *
     * // I am interested in saving this information...
     * const resource = ack.res.resource;
     * const secret = ack.res.secret;
     * @async
     * @param {any} payload Data to upload
     * @return {Promise<PublishResponse>}
     */
    publish: (payload: any) => Promise<PublishResponse>
}

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
 *
 * // ...or access static
 * const jsp_version = JSP.version;
 * @public
 * @class
 * @type {JSP}
 */
export class JSP {
    /**
     * Returns JSP (AKA JSPaste) release version
     * @example
     * console.info("Running on JSPaste " + JSP.version)
     * @public
     * @static
     * @readonly
     * @type {string}
     */
    public static readonly version: string = version_semver;

    /**
     * JSP (AKA JSPaste) API methods
     * @public
     * @readonly
     * @type {JSPMethods}
     */
    public readonly api: JSPMethods = {
        async access(resource: string): Promise<AccessResponse> {
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
        },

        async publish(payload: any): Promise<PublishResponse> {
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
}