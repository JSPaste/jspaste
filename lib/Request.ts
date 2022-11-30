import {JSPHTTP} from "./core";
import {useragent} from "./bank";

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

    public access = (resource: string) => super.get(resource);
    public publish = (payload: any, resource?: string) => super.post(payload, resource);
}