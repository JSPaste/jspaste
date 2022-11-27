import {JSPHTTP} from "./core";

export class Request extends JSPHTTP {
    public constructor(api_url: string) {
        super(api_url);
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