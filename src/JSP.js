'use strict';

import * as a from 'axios';
import { Handler } from './misc/util.js';
import { constants } from './misc/constants.js';

export class JSP {
    static invalid = ['INVALID_PARAMS_PROVIDED', '"Key" or "Secret" is invalid or missing in the parameters', 'No body provided for the document'];
    static time = ['TIME_IS_NOT_A_NUMBER', 'Invalid time provided on JSPaste.publish function.']
    static request = ['ERROR_ON_REQUEST', 'An error occurred while making the request: '];


    /**
     * @param key The identifier in order to find the document
     * @param secret The token to verify the document ownership
     *
     * @exception Error
     */

    static async remove(key, secret) {
        if ((key || secret) == null) return Handler.Error(this.invalid[0], this.invalid[1]);

        await a.default.delete(constants.baseURL + constants.routeURL + key, {headers: {secret: secret}})
            .catch(e => {
                return e.response ? Handler.Error(this.request[0], this.request[1] + e.response.status + e.response.data.message ? e.response.data.message : e.message) : e
            })

        return true
    }


    /**
     * @param key The identifier in order to find the document
     *
     * @exception Error
     */

    static async check(key) {
        if (key == null) return Handler.Error(this.invalid[0], this.invalid[1]);

        const r = await a.default.get(constants.baseURL + constants.routeURL + key)
            .catch(() => false)

        return Boolean(r)
    }


    /**
     * @param key The identifier in order to find the document
     *
     * @exception Error
     */

    static async get(key) {
        if (key == null) return Handler.Error(this.invalid[0], this.invalid[1]);

        const r = await a.default.get(constants.baseURL + constants.routeURL + key)
            .catch(e => {
                return e.response ? Handler.Error(this.request[0], this.request[1] + e.response.status + e.response.data.message ? e.response.data.message : e.message) : e
            })

        return r.data.data
    }


    /**
     * @param body The content you want to upload
     * @param deleteTime Time in milliseconds before deleting the publication
     *
     * @return Promise<Error | ({url: string, key: string, secret: string})>
     * @exception Error
     */

    static async publish(body, deleteTime = null) {
        if (body == null) return Handler.Error(this.invalid[0], this.invalid[2]);

        const r = await a.default.post(constants.baseURL + constants.routeURL)
            .catch(e => {
                return e.response ? Handler.Error(this.request[0], this.request[1] + e.response.status + e.response.data.message ? e.response.data.message : e.message) : e
            })

        if (deleteTime) isNaN(deleteTime) ? Handler.Error(this.time[0], this.time[1]) : setTimeout(async () => {await this.remove(r.data.key, r.data.secret)}, deleteTime);

        return {url: constants.baseURL + '/' + r.data.key, ...r.data};
    }
}