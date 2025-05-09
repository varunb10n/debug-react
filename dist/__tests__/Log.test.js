import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Log } from "../components";
describe("Log component", () => {
    it("render formatted JSON of props", () => {
        const testProps = { message: "Hi!" };
        render(_jsx(Log, Object.assign({}, testProps)));
        expect(screen.getByText(/"message": "Hi!"/)).toBeInTheDocument();
    });
    it("handles empty props", () => {
        render(_jsx(Log, {}));
        expect(screen.getByText("{}")).toBeInTheDocument();
    });
});
