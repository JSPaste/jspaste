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

    public readonly publish = (payload: any): Promise<Response> => this.customs(super.run("POST", undefined, undefined, payload));
    public readonly access = (resource: string): Promise<Response> => this.customs(super.run("GET", resource));
    public readonly remove = (resource: string, secret: string): Promise<Response> => this.customs(super.run("DELETE", resource, secret));

    private async customs(responsePromise: Promise<Response>): Promise<Response> {
        const response = await responsePromise;

        try {
            JSON.parse(await response.text())
        } catch (e) {
            throw new JSPError("APIError", msg.err.API_INVALID_RESPONSE, msg.err.API_INVALID_RESPONSE_EXTRA);
        }

        return response;
    }
}