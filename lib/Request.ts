import {JSPHTTP} from "./core/JSPHTTP";
import {Response} from "centra";
import {JSPError} from "./core/JSPError";
import {msg} from "./bank";

export class Request extends JSPHTTP {
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
            throw new JSPError("APIError", msg.err.API_INVALID_RESPONSE, msg.err.API_INVALID_RESPONSE_EXTRA);
        })

        return {
            ...response,
            body: await response.json()
        }
    }
}