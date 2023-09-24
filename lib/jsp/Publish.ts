import Request from "../Request.ts";
import {api} from "../static/api/v1.ts";

export default async function publish(payload: any): Promise<IPublishRes> {
    const response = await new Request("POST", api.route.documents).publish(String(payload));

    return {
        req: {
            valid: response.raw.ok,
            payload: payload
        },
        res: {
            // TODO: Breaking change: string to URL
            url: new URL(api.url + response.api.key),
            raw: response.raw,
            resource: response.api.key,
            secret: response.api.secret
        }
    }
}

export interface IPublishRes {
    req: {
        valid: boolean;
        payload: any;
    };
    res: {
        url: URL;
        raw: Response;
        resource: string | undefined;
        secret: string | undefined;
    };
}