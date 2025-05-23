import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Log } from "../src";

describe("Log component", () => {
  it("render formatted JSON of props", () => {
    const testProps = { message: "Hello Log!" };
    render(<Log data={testProps} />);
    expect(screen.getByText(/"message": "Hello Log!"/)).toBeInTheDocument();
  });

  it("handles empty props", () => {
    render(<Log data={{}} />);
    expect(screen.getByText("{}")).toBeInTheDocument();
  });
});
