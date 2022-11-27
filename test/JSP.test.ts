import {JSP} from "../lib";

describe("JSP", () => {
    test(".version", () => {
        const x = JSP.version;

        expect(x).toBeDefined();
        expect(typeof x).toBe("string")
    });

    test("# (default)", () => {
        const x = new JSP();

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(JSP);
    });
});

const jsp = new JSP();
describe("JSP#api", () => {
    test(".access()", async () => {
        const x = await jsp.api.access("fxynzgtuntekaknbsovyod");

        expect(x.body.data).toBeDefined();
        expect(x.body.key).toBeDefined();
    });
});