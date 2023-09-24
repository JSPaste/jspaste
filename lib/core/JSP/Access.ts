import Request from "../Request.ts";
import {api} from "../../static/api/v1.ts";
import {URL} from "url";

export default async function access(resource: string): Promise<IAccessRes> {
    const response = await new Request("GET", api.route.documents).access(resource);

    return {
        req: {
            valid: response.raw.ok,
            resource: resource
        },
        res: {
            // TODO: Breaking change: string to URL
            url: new URL(api.url + resource),
            raw: response.raw,
            payload: response.api.data
        }
    }
}

export interface IAccessRes {
    req: {
        valid: boolean;
        resource: string;
    };
    res: {
        url: URL;
        raw: Response;
        payload: any | undefined;
    };
}