import {JSPHTTP} from "./core/JSPHTTP";
import {Response} from "centra";

export class Request extends JSPHTTP {
    public constructor(api_url?: string) {
        const options = {
            headers: {
                "User-Agent": "JSPaste"
            }
        }

        super(api_url, options);
    }

    public readonly access = (resource: string): Promise<Response> => super.run("GET", resource);
    public readonly publish = (payload: any): Promise<Response> => super.run("POST", undefined, undefined, payload);
    public readonly remove = (resource: any, secret: string): Promise<Response> => super.run("DELETE", resource, secret);
}