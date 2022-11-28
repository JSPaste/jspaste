import {api, default_api_url, version} from "./bank";
import {Request} from "./Request";

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
    public static readonly version: string = version;

    /**
     * JSP (AKA JSPaste) API methods
     * @public
     * @readonly
     * @type any
     */
    public readonly api: any = {
        /**
         * TODO: blabla
         * @example
         * // ...
         * JSP.api.access("foo")
         *
         * @param resource Path of the document
         * @type any
         */
        access: async (resource: string) => {
            const req = await new Request(default_api_url + api.documents).access(resource)
            const body = await req.json()

            // TODO: weird paths
            return {
                req: {
                    url: req.url,
                    resource: resource,
                    valid: req.ok
                },
                res: {
                    raw: body,
                    payload: body.data
                }
            }
        }
    }
}