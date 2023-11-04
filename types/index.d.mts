interface IAccessResponse {
    req: {
        valid: boolean
        resource: string
    }
    res: {
        url: URL
        raw: any
        payload: any
    }
}

interface IPublishResponse {
    req: {
        valid: boolean
        payload: any
    }
    res: {
        url: URL
        raw: any
        resource: string | null
        secret: string | null
    }
}

interface IRemoveResponse {
    req: {
        valid: boolean
        resource: string
        secret: string
    }
    res: {
        raw: any
    }
}

/**
 * JSP class, all magic resides here ✨
 * @example
 * // Initialize an instance
 * const jsp = new JSP()
 */
declare class JSP {

    /**
     * Publish content to JSPaste.
     * @example
     * // Upload a stack trace for later debugging
     * jsp.publish(foo).then(ack => {
     *     console.info('Stack trace uploaded to:', ack.res.url)
     * })
     * @param {any} payload Data to upload
     * @return {Promise<IPublishResponse>}
     */
    publish: (payload: any) => Promise<IPublishResponse>

    /**
     * Access the content uploaded to JSPaste.
     * @example
     * // Retrieve and log the "foobar" resource content
     * jsp.access('foobar').then(ack => {
     *     console.log(ack.res.payload)
     * })
     * @param {string} resource Resource identifier
     * @return {Promise<IAccessResponse>}
     */
    access: (resource: string) => Promise<IAccessResponse>

    /**
     * Remove the content uploaded to JSPaste.
     * @example
     * // Delete the "foobar" resource
     * jsp.remove('foobar', 'ultrasecret').then(ack => {
     *     if (ack.req.valid) console.info('Resource deleted.')
     *     else console.info('Resource deletion failed.')
     * })
     * @param {string} resource Resource identifier
     * @param {string} secret Key to validate ownership of the resource
     * @return {Promise<IRemoveResponse>}
     */
    remove: (resource: string, secret: string) => Promise<IRemoveResponse>
}

export { JSP as default }
