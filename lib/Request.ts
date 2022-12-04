import {JSPHTTP} from "./core";
import {useragent} from "./bank";
import {Response} from "node-fetch";

export class Request extends JSPHTTP {
    public constructor(api_url: string) {
        const options = {
            headers: {
                "User-Agent": useragent
            },
            follow: 3,
        };

        super(api_url, options);
    }

    public access = (resource: string): Promise<Response> => super.get(resource);
    public publish = (payload: any, resource?: string): Promise<Response> => super.post(payload, resource);
}