import {JSPError} from "../lib/core/JSPError";

describe("JSPError#", () => {
    test("() -> test", () => {
        const x = "This is a test error";
        const y = "This is the description of the test error";

        expect(() => {
            throw new JSPError("TestError", x, y);
        }).toThrow(x);
    });
});