import { search } from "./search_v1";

describe("search()", () => {
  it("should find nothing if input is empty", () => {
    expect(search(1, [])).toBe(false);
  });

  it("should find if anywhere in the array", () => {
    expect(search(1, [1])).toBe(true);
    expect(search(1, [-5, 1, 3])).toBe(true);
    expect(search(1, [-5, 3, 1])).toBe(true);
  });
});
