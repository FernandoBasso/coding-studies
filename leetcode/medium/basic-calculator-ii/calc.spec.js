import { tokenize, calc } from "./calc_v2.js";

describe("tokenize()", () => {
  test("should tokenize different inputs", () => {
    expect(
      tokenize("2 + 3 - 5")
    ).toEqual([2, "+", 3, "-", 5]);

    expect(
      tokenize("234 + 1 - 1")
    ).toEqual([234, "+", 1, "-", 1]);

    expect(
      tokenize("1 - 234 / 9 * 1")
    ).toEqual([1, "-", 234, "/", 9, "*", 1]);
  });
});

describe("calc()", () => {
  expect(
    calc("2 +3*5 * 1 * 1 * 1 - 1 + 1")
  ).toEqual(17);


  expect(calc("3/ 2   ")).toEqual(1);

  expect(calc("3 +5 /2")).toEqual(5);

  expect(calc("234 + 1 - 1")).toEqual(234);
});
