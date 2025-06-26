import { search } from "./search";

describe("Binary Search", () => {
  it("should find nothing if input is empty", () => {
    expect(search(1, [])).toBe(false);
  });

  it("should find the value on the very middle the first time", () => {
    expect(search(5, [1, 3, 5, 7, 9])).toBe(true);
  });

  it("finds the value on the middle of the first left half", () => {
    expect(search(2, [1, 2, 3, 4, 5, 6, 7])).toBe(true);
  });

  it("finds the value on the left of the first left half", () => {
    expect(search(1, [1, 2, 3, 4, 5, 6, 7])).toBe(true);
  });

  it("finds the value on the right of the first left half", () => {
    expect(search(3, [1, 2, 3, 4, 5, 6, 7])).toBe(true);
  });

  it("finds the value on the middle of the first right half", () => {
    expect(search(6, [1, 2, 3, 4, 5, 6, 7])).toBe(true);
  });

  it("finds the value on the left of the first right half", () => {
    expect(search(5, [1, 2, 3, 4, 5, 6, 7])).toBe(true);
  });

  it("finds the value on the right of the first right half", () => {
    expect(search(7, [1, 2, 3, 4, 5, 6, 7])).toBe(true);
  });
});
