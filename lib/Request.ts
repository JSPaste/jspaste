import {JSPHTTP} from "./core";
import {useragent} from "./bank";

export class Request extends JSPHTTP {
    public constructor(api_url: string) {
        let options = {
            method: "",
            headers: {
                "User-Agent": useragent
            },
            follow: 3,
        };

        super(api_url, options);
    }

    public access(api_route: string) {
        return super.get(api_route);
    }

    /* TODO: best method in this case?
    public post(api_route: string) {
        return super.post(...);
    }
     */
}