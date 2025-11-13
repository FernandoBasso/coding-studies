import { merge, msort } from "./msort";

describe("Merge Sorted Arrays", () => {
  test("two empty arrays", () => {
    var xs = [];
    var ys = [];
    var res = merge(xs, ys);
    expect(res).toEqual([]);
  });

  test("single element & empty", () => {
    var xs = [1];
    var ys = [];
    var res = merge(xs, ys);
    expect(res).toEqual([1]);
  });
});

describe.skip("Bubble Sort", () => {
  test("empty array is sorted", () => {
    var xs = [];
    msort(xs);
    expect(xs).toEqual([]);
  });

  test("single-element array is sorted", () => {
    var xs = [7];
    msort(xs);
    expect(xs).toEqual([7])
  });

  test("two-element array", () => {
    var xs = [1, 1];
    msort(xs);
    expect(xs).toEqual([1, 1]);

    var ys = [-1, 1];
    msort(ys);
    expect(ys).toEqual([-1, 1]);

    var zs = [1, -1];
    msort(zs);
    expect(zs).toEqual([-1, 1]);
  });

  it("larger arrays", () => {
    var xs = [-10, -20, -30, -40, -50, -60];
    msort(xs);
    expect(xs).toEqual([-60, -50, -40, -30, -20, -10]);

    var ys = [50, 10, 20, -60, 30, 40];
    msort(ys);
    expect(ys).toEqual([-60, 10, 20, 30, 40, 50]);
  });
});
