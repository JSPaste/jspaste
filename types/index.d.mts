interface IAccessResponse {
    req: {
        valid: boolean;
        resource: string;
    };
    res: {
        url: URL;
        raw: any;
        payload: any;
    };
}

interface IPublishResponse {
    req: {
        valid: boolean;
        payload: any;
    };
    res: {
        url: URL;
        raw: any;
        resource: string | null;
        secret: string | null;
    };
}

interface IRemoveResponse {
    req: {
        valid: boolean;
        resource: string;
        secret: string;
    };
    res: {
        raw: any;
    };
}

/**
 * JSP class, all magic resides here ✨
 * @example
 * // > Initialize an instance
 * const jsp = new JSP()
 * jsp.access("foo").then(x => { ... })
 */
declare class JSP {

    /**
     * Upload to JSPaste (E.g. log dumps which need to be uploaded for later access)
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
    publish: (payload: any) => Promise<IPublishResponse>;

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
    access: (resource: string) => Promise<IAccessResponse>;

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
    remove: (resource: string, secret: string) => Promise<IRemoveResponse>;
}

export { JSP as default };
