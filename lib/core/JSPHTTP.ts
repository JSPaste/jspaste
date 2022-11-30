import fetch from "node-fetch";

export abstract class JSPHTTP {
    readonly #api_url;
    readonly #options;

    protected constructor(api_url: string, options: any) {
        this.#api_url = api_url;
        this.#options = options;
    }

    protected get(resource: string) {
        this.#options.method = "GET"

        return fetch(this.#api_url + resource, this.#options)
    }

    protected post(payload: any, resource?: string) {
        this.#options.method = "POST"
        this.#options.body = payload

        return (typeof resource === "undefined") ? fetch(this.#api_url, this.#options) : fetch(this.#api_url + resource, this.#options)
    }
}