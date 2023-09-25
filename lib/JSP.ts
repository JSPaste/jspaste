import access from "./core/JSP/Access.ts";
import publish from "./core/JSP/Publish.ts";
import remove from "./core/JSP/Remove.ts";
import JSPError from "./core/JSPError.ts";
import {error} from "./static/messages.ts";

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
export default class JSP {
    constructor() {
        if (parseFloat(process.versions.node) < 18) {
            try {
                // TODO: Remove debug
                console.debug("[///] Using undici")
                globalThis.fetch = require("undici").fetch;
            } catch {
                throw new JSPError("MissingPackage", error.PACKAGE_MISSING)
            }
        }
    }

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
     */
    publish = (payload: any) => publish(payload);

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
     */
    access = (resource: string) => access(resource);

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
     */
    remove = (resource: string, secret: string) => remove(resource, secret);
}