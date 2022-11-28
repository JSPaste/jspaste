import fetch, {Response} from "node-fetch";

export abstract class JSPHTTP {
    private readonly api_url;
    private readonly options;

    protected constructor(api_url: string, options: any) {
        this.api_url = api_url;
        this.options = options;
    }

    protected get(api_route: string): Promise<Response> {
        this.options.method = "GET"

        return fetch(this.api_url + api_route, this.options)
    }
}