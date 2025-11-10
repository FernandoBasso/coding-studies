import { qsort } from "./qsort";

describe("Quick Sort", () => {
  test("empty array is sorted", () => {
    var xs = [];
    qsort(xs);
    expect(xs).toEqual([]);
  });

  test("single-element array is sorted", () => {
    var xs = [7];
    qsort(xs);
    expect(xs).toEqual([7])
  });

  test("two-element array", () => {
    var xs = [1, 1];
    qsort(xs);
    expect(xs).toEqual([1, 1]);

    var ys = [-1, 1];
    qsort(ys);
    expect(ys).toEqual([-1, 1]);

    var zs = [1, -1];
    qsort(zs);
    expect(zs).toEqual([-1, 1]);
  });

  it("larger arrays", () => {
    var xs = [-10, -20, -30, -40, -50, -60];
    qsort(xs);
    expect(xs).toEqual([-60, -50, -40, -30, -20, -10]);

    var ys = [50, 10, 20, -60, 30, 40];
    qsort(ys);
    expect(ys).toEqual([-60, 10, 20, 30, 40, 50]);
  });
});
