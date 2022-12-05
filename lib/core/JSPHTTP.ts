import fetch from "node-fetch";
import {TMethod} from "../bank.js";

export abstract class JSPHTTP {
    #api_url;
    readonly #options;

    protected constructor(api_url: string, options: any) {
        this.#api_url = api_url;
        this.#options = options;
    }

    protected run(method: TMethod, resource?: string, secret?: string, payload?: any) {
        this.#options.method = method
        this.#options.headers = {}
        this.#options.body = ""

        switch (method) {
            case "GET":
                this.#options.body = null

                if (typeof resource !== "undefined") this.#api_url += resource
                break

            case "POST":
                if (typeof payload !== "undefined") {
                    this.#options.body += payload
                }
                break

            case "DELETE":
                if (typeof resource !== "undefined") this.#api_url += resource
                if (typeof secret !== "undefined") {
                    this.#options.headers.secret = secret
                }
                break

            default:
            // TODO ...
        }

        return fetch(this.#api_url, this.#options)
    }
}