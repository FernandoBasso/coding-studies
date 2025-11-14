import { concat } from "./arr_concat";

describe("concat()", () => {
  test("two empty arrays", () => {
    expect(concat([], [])).toEqual([]);
  });

  test("two non-empty arrays of same size", () => {
    expect(
      concat([5, 1, 0], [20, 70, 40])
    ).toEqual([5, 1, 0,  20, 70, 40]);
  });

  test("empty and non-empty", () => {
    expect(
      concat([], [50, 20, 30])
    ).toEqual([50, 20, 30]);
  });

  test("non-empty and empty", () => {
    expect(
      concat([50, 20, 30], [])
    ).toEqual([50, 20, 30]);
  });

  test("non-empty with different sizes", () => {
    expect(
      concat([50, 20], [0])
    ).toEqual([50, 20, 0]);

    expect(
      concat([50, 90, -Infinity], [0, 100, 1e2, -1e2, Infinity])
    ).toEqual([50, 90, -Infinity, 0, 100, 1e2, -1e2, Infinity]);
  });
});
