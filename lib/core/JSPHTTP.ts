import c from "centra";
import {msg, timeout, TMethod} from "../bank";
import {JSPError} from "./JSPError";

export abstract class JSPHTTP {
    readonly #api_url;
    readonly #options;

    protected constructor(api_url: string | undefined, options: any) {
        if (typeof api_url === "undefined") throw new JSPError("InternalError", msg.err.INTERNAL, msg.err.INTERNAL_EXTRA);

        this.#api_url = api_url;
        this.#options = options;
    }

    protected run(method: TMethod, resource?: string, secret?: string, payload?: any) {
        if (typeof resource === "undefined") resource = "";
        let fetch = c(this.#api_url + resource, this.#options).option("method", method);

        switch (method) {
            case "GET":
                break;

            case "POST":
                if (typeof payload !== "undefined") fetch.body(payload);
                break;

            case "DELETE":
                if (typeof secret !== "undefined") fetch.header("secret", secret);
                break;

            default:
                throw new JSPError("InternalError", msg.err.INTERNAL, msg.err.INTERNAL_EXTRA);
        }

        return fetch.timeout(timeout).compress().send().catch((err) => {
            throw new JSPError("APIError", err, msg.err.API_TIMEOUT_EXTRA);
        });
    }
}