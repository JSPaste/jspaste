import {JSP} from "../lib/JSP";

jest.retryTimes(3, {logErrorsBeforeRetry: true});
describe("JSP#", () => {
    const jsp = new JSP();
    let resource: string;
    let secret: string;

    test(".publish()", async () => {
        const x = await jsp.publish("Lorem ipsum dolor sit amet");

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.debug(x)

        resource = <string>x.res.resource
        secret = <string>x.res.secret
    });

    test(".access() -> valid", async () => {
        const x = await jsp.access(resource);

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.debug(x)
    });

    test(".access() -> invalid", async () => {
        const x = await jsp.access(".invalid.");

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeFalsy();
        console.debug(x)
    });

    test(".remove() -> valid", async () => {
        const x = await jsp.remove(resource, secret);

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.debug(x)
    });

    test(".remove() -> invalid", async () => {
        const x = await jsp.remove(resource, ".invalid.");

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeFalsy();
        console.debug(x)
    });
});