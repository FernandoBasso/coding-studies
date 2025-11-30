import { calc } from "./calc_perf_v1.js";

describe("calc()", () => {
  it("should compute the value of the expressions", () => {
    expect(
      calc("2 +3*5 * 1 * 1 * 1 - 1 + 1")
    ).toEqual(17);

    expect(calc("3/ 2   ")).toEqual(1);

    expect(calc("3 +5 /2")).toEqual(5);

    expect(calc("234 + 1 - 1")).toEqual(234);
  });
});
