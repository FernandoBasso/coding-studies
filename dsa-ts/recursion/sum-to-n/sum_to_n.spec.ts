import { sumTo } from "./sum_to_v1";

describe("sum to n", () => {
  it("currectly sums to n", () => {
    expect(sumTo(0)).toBe(0);
    expect(sumTo(1)).toBe(1);
    expect(sumTo(4)).toBe(10);

    ////
    // Larger numbers will cause stack size exceeded or similar as
    // ECMAScript does not feature tail call optimization.
    //
    expect(sumTo(9_457)).toBe(44722153);
  });
});
