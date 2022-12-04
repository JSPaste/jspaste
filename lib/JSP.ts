import {api, default_api_url, version_semver} from "./bank";
import {Request} from "./Request";

interface JSPMethods {
        access: (resource: string) => Promise<AccessResponse>,
        publish: (payload: any) => Promise<PublishResponse>
}

interface AccessResponse {
    req: {
        resource: string,
        valid: boolean
    },
    res: {
        raw: object
        url: string
        payload: string
    }
}

interface PublishResponse {
    req: {
        payload: string,
        valid: boolean
    },
    res: {
        raw: object,
        url: string
        resource: string,
        secret: string
    }
}

/**
 * JSP (AKA JSPaste) Class
 * @example
 * // Create a JSP instance
 * const jsp = new JSP();
 *
 * // ...or access static
 * const jsp_version = JSP.version;
 * @public
 * @class
 */
export class JSP {
    /**
     * Returns JSP (AKA JSPaste) release version
     * @example
     * JSP.version // x.y.z
     * @public
     * @static
     * @readonly
     * @type string
     */
    public static readonly version: string = version_semver;

    /**
     * JSP (AKA JSPaste) API methods
     * @public
     * @readonly
     * @type JSPMethods
     */
    public readonly api: JSPMethods = {
        /**
         * Access a previously published resource
         * @example
         * // I wish to retrieve data from the resource "foo"...
         * new JSP().api.access("foo")
         * @param resource Resource identifier
         * @type Promise<AccessResponse>
         */
        async access(resource: string): Promise<AccessResponse> {
            const req = await new Request(default_api_url + api.documents).access(resource)
            const body: any = await req.json()

            return {
                req: {
                    resource: resource,
                    valid: req.ok
                },
                res: {
                    raw: body,
                    url: default_api_url + resource,
                    payload: body.data
                }
            }
        },

        /**
         * Publish a resource in the API. Uploaded resources will not be indexable, **HOWEVER** you **MUST NOT** upload sensitive data.
         * @example
         * // I wish to upload "lots of" data temporarily...
         * new JSP().api.publish("Lorem ipsum dolor sit amet ...")
         * @param payload Data to upload
         * @type Promise<PublishResponse>
         */
        async publish(payload: any): Promise<PublishResponse> {
            const req = await new Request(default_api_url + api.documents).publish(String(payload))
            const body: any = await req.json()

            return {
                req: {
                    payload: payload,
                    valid: req.ok
                },
                res: {
                    raw: body,
                    url: default_api_url + body.key,
                    resource: body.key,
                    secret: body.secret
                }
            }
        }
    }
}