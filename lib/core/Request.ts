import {api} from "../static/api/v1.ts";
import JSPError from "./JSPError.ts";

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
        try {
            const response = await fetch(url, options)

            return {
                raw: response,
                api: response.headers.get("Content-Type")?.includes("application/json") ? await response.json() : {}
            }
        } catch (err) {
            throw new JSPError("APIError", err);
        }
    }
}

export type TMethod = 'GET' | 'POST' | 'DELETE';