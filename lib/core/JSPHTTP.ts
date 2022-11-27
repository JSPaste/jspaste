import {useragent} from "../bank";
import fetch, {Response} from "node-fetch";

export abstract class JSPHTTP {
    private readonly api_url;
    private readonly options;

    protected constructor(api_url: string) {
        this.api_url = api_url;

        this.options = {
            method: "",
            headers: {
                "User-Agent": useragent
            },
            follow: 3,
        };
    }

    protected get(api_route: string): Promise<Response> {
        const options = this.options
        options.method = "GET"

        return fetch(this.api_url + api_route, options)
    }
}