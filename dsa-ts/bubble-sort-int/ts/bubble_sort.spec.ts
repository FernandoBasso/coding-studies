import { bubbleSort } from "./bubble_sort_v1";

describe("bubble sort ints", () => {
  it("an empty array is sorted by definition", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("an array of one element is sorted by definition", () => {
    expect(bubbleSort([-42])).toEqual([-42]);
  });

  it("does not change an already sorted array", () => {
    expect(
      bubbleSort([-3, -1, 1, 3, 5, 9])
    ).toEqual([-3, -1, 1, 3, 5, 9]);
  });

  it("does not change an array of equal values", () => {
    expect(bubbleSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });

  it("correctly sorts input which is sorted in descending order", () => {
    expect(
      bubbleSort([9, 5, 3, 1, -1, -3])
    ).toEqual([ -3, -1, 1, 3, 5, 9]);
  });

  it("correctly sorts an input of random order", () => {
    expect(
      bubbleSort([1, -3, 5, 9, -1, 3])
    ).toEqual([-3, -1, 1, 3, 5, 9]);
  });
});
