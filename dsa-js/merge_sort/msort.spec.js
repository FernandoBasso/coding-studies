import { merge, msort } from "./msort";

describe("Merge Sorted Arrays", () => {
  test("two empty arrays", () => {
    var xs = [];
    var ys = [];
    var res = merge(xs, ys);
    expect(res).toEqual([]);
  });

  test("single element arrays", () => {
    var xs = [1];
    var ys = [2];
    var res = merge(xs, ys);
    expect(res).toEqual([1, 2]);
  });

  test("multiple elements, same length", () => {
    var xs = [1, 3, 5];
    var ys = [2, 4, 6];
    var res = merge(xs, ys);
    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("first array smaller than second array", () => {
    var xs = [5];
    var ys = [3, 4, 6];
    var res = merge(xs, ys);
    expect(res).toEqual([3, 4, 5, 6]);
  });

  test("first array larger than second array", () => {
    var xs = [1, 3, 4];
    var ys = [2, 5];
    var res = merge(xs, ys);
    expect(res).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Bubble Sort", () => {
  test("empty array is sorted", () => {
    expect([]).toEqual([]);
  });

  test("single-element array is sorted", () => {
    expect(msort([7])).toEqual([7])
  });

  test("two-element array", () => {
    expect(msort([1, 1])).toEqual([1, 1]);

    expect(msort([-1, 1])).toEqual([-1, 1]);

    expect(msort([1, -1])).toEqual([-1, 1]);
  });

  test("larger arrays", () => {
    var xs = [-10, -20, -30, -40, -50, -60];
    expect(msort(xs)).toEqual([-60, -50, -40, -30, -20, -10]);

    var ys = [50, 10, 20, -60, 30, 40];
    expect(msort(ys)).toEqual([-60, 10, 20, 30, 40, 50]);
  });
});
