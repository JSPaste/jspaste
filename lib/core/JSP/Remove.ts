import Request from "../Request.ts";
import {api} from "../../static/api/v1.ts";

export default async function remove(resource: string, secret: string): Promise<IRemoveRes> {
    const response = await new Request("DELETE", api.route.documents).remove(resource, secret);

    return {
        req: {
            valid: response.raw.ok,
            resource: resource,
            secret: secret
        },
        res: {
            raw: response.raw
        }
    }
}

export interface IRemoveRes {
    req: {
        valid: boolean;
        resource: string;
        secret: string;
    };
    res: {
        raw: Response;
    };
}