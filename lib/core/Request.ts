import {api} from "../static/api/v1.ts";
import JSPError from "./JSPError.ts";
import {error} from "../static/messages.ts";
// TODO: Test NodeJS runtimes
//import { fetch } from "undici"

export default class Request {
    readonly #endpoint;
    readonly #method;
    readonly #headers: any;

    constructor(method: TMethod, route?: string) {
        this.#endpoint = api.url + (route ?? "");
        this.#method = method;
        this.#headers = {"User-Agent": "JSPaste"};
    }

    access(resource: string) {
        const options = {
            method: this.#method,
            headers: this.#headers,
        };

        return this.run(this.#endpoint + resource, options)
    }

    publish(payload: any) {
        const options = {
            method: this.#method,
            body: payload,
            headers: this.#headers,
        };

        return this.run(this.#endpoint, options)
    }

    remove(resource: string, secret: string) {
        this.#headers["secret"] = secret;

        const options = {
            method: this.#method,
            headers: this.#headers,
        };

        return this.run(this.#endpoint + resource, options)
    }

    private async run(url: string, options: any) {
        const response = await fetch(url, options).catch((err) => {
            throw new JSPError("APIError", err, error.API_TIMEOUT_EXTRA);
        })

        return {
            raw: response,
            api: await response.json(),
        };
    }
}

export type TMethod = 'GET' | 'POST' | 'DELETE';