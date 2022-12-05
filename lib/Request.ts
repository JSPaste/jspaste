import {JSPHTTP} from "./core/JSPHTTP.js";
import {Response} from "node-fetch";

export class Request extends JSPHTTP {
    public constructor(api_url: string) {
        const options = {
            headers: {
                "User-Agent": "JSPaste"
            },
            follow: 3,
        };

        super(api_url, options);
    }

    public readonly access = (resource: string): Promise<Response> => super.run("GET", resource);
    public readonly publish = (payload: any): Promise<Response> => super.run("POST", undefined, undefined, payload);
    public readonly remove = (resource: any, secret: string): Promise<Response> => super.run("DELETE", resource, secret);
}