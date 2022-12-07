import c from "centra";
import {TMethod} from "../bank";
import {JSPError} from "./JSPError";

export abstract class JSPHTTP {
    readonly #api_url;
    readonly #options;

    protected constructor(api_url: string | undefined, options: any) {
        // TODO Messages
        if (typeof api_url === "undefined") throw new JSPError("InternalError", "api_url is undefined");

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
            // TODO Messages
        }

        return fetch.timeout(5000).compress().send();
    }
}