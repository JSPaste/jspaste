import c from "centra";
import {msg, timeout, TMethod} from "../bank";
import {JSPError} from "./JSPError";

export abstract class JSPHTTP {
    readonly #api_url;
    readonly #options;

    protected constructor(api_url: string | undefined, options: any) {
        if (!api_url) throw new JSPError("InternalError", msg.err.INTERNAL, msg.err.INTERNAL_EXTRA);

        this.#api_url = api_url;
        this.#options = options;
    }

    protected run(method: TMethod, resource?: string, secret?: string, payload?: any) {
        const fetch = c(this.#api_url + (resource ? resource : ""), this.#options).option("method", method);

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
            throw new JSPError("APIError", err, msg.err.API_TIMEOUT_EXTRA);
        });
    }
}