import {api, APIVersion, default_api_url, default_api_version, version} from "./bank";
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
    private readonly api_endpoint: any;
    private readonly api_url: string;

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
            // 2-2
            const req = await new Request(this.api_url).access(resource)
            const body = await req.json()

            // TODO: weird paths
            return {
                req: {
                    url: req.url,
                    resource: resource,
                    valid: req.ok
                },
                body: {
                    raw: await body,
                    key: (await body).key,
                    data: (await body).data
                }
            }
        }
    };

    /**
     * Constructor de JSP (AKA JSPaste)
     * @example
     * const jsp = new JSP();
     * @public
     * @constructor
     * @param gateway (Optional) Use a different API release from the default.
     */
    public constructor(gateway?: APIVersion) {
        if (typeof gateway === "undefined") gateway = default_api_version

        this.api_endpoint = this.setGateway(gateway);
        this.api_url = default_api_url + this.api_endpoint.documents;
    }

    // TODO: is needed in this case?
    private setGateway(gateway: APIVersion): any {
        let api_endpoint;

        // Default Gateway
        if (gateway == 1) api_endpoint = api.v1;
        else api_endpoint = api.v1;

        return api_endpoint;
    }
}