import {JSP} from "../lib/JSP.js";

describe("JSP#api", () => {
    const jsp = new JSP();
    let resource: string;
    let secret: string;

    test(".publish()", async () => {
        const x = await jsp.publish("Lorem ipsum dolor sit amet");

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.info(x)

        resource = <string>x.res.resource
        secret = <string>x.res.secret
    });

    test(".access() // valid", async () => {
        const x = await jsp.access(resource);

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.info(x)
    });

    test(".access() // !valid", async () => {
        const x = await jsp.access(String("start." + (Math.floor(Math.random() * 9999) + 1000) + ".end"));

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeFalsy();
        console.info(x)
    });

    test(".remove() // valid", async () => {
        const x = await jsp.remove(resource, secret);

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.info(x)
    });

    test(".remove() // !valid", async () => {
        const x = await jsp.remove(resource, String("start." + (Math.floor(Math.random() * 9999) + 1000) + ".end"));

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeFalsy();
        console.info(x)
    });
});