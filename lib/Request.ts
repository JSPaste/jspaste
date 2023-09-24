import c, {Response} from "centra";
import JSPError from "./JSPError.ts";
import {error} from "./static/messages.ts";

const timeout = 7000;

abstract class JSPHTTP {
    readonly #api_url;
    readonly #options;

    protected constructor(api_url: string | undefined, options: any) {
        if (!api_url) throw new JSPError("InternalError", error.INTERNAL, error.INTERNAL_EXTRA);

        this.#api_url = api_url;
        this.#options = options;
    }

    protected run(method: TMethod, resource?: string, secret?: string, payload?: any) {
        const fetch = c(this.#api_url + (resource ?? ""), this.#options).option("method", method);

        switch (method) {
            case "GET":
                break;

            case "POST":
                if (payload) fetch.body(payload);
                break;

            case "DELETE":
                if (secret) fetch.header("secret", secret);
                break;
        }

        return fetch.timeout(timeout).compress().send().catch((err) => {
            throw new JSPError("APIError", err, error.API_TIMEOUT_EXTRA);
        });
    }
}

export default class Request extends JSPHTTP {
    public constructor(api_url?: string) {
        const options = {
            headers: {
                "User-Agent": "JSPaste"
            }
        }

        super(api_url, options);
    }

    public readonly publish = (payload: any) => this.customs(super.run("POST", undefined, undefined, payload));
    public readonly access = (resource: string) => this.customs(super.run("GET", resource));
    public readonly remove = (resource: string, secret: string) => this.customs(super.run("DELETE", resource, secret));

    private async customs(responsePromise: Promise<Response>) {
        const response = await responsePromise;

        await response.json().catch(() => {
            throw new JSPError("APIError", error.API_INVALID_RESPONSE, error.API_INVALID_RESPONSE_EXTRA);
        })

        return {
            ...response,
            body: await response.json()
        }
    }
}

export type TMethod = 'GET' | 'POST' | 'DELETE';