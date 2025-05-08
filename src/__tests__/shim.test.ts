import { isObject } from "../util/shim";

describe("isObject utility", () => {
  it("returns true for plain objects", () => {
    expect(isObject({})).toBe(true);
  });

  it("returns false for arrays", () => {
    expect(isObject([])).toBe(false);
  });

  it("returns false for function", () => {
    expect(isObject(() => {})).toBe(false);
  });

  it("returns false for null and undefined", () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });

  it("returns false for primitive values", () => {
    expect(isObject("string")).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});
