import { assertEquals } from "@std/assert";
import { bubbleSort } from "./bubble_sort_v1.ts";

Deno.test("bubble sort ints", async (t) => {
  await t.step("an empty array is sorted by definition", () => {
    assertEquals(bubbleSort([]), []);
  });

  await t.step("an array of one element is sorted by definition", () => {
    assertEquals(bubbleSort([-42]), [-42]);
  });

  await t.step("does not change an already sorted array", () => {
    assertEquals(
      bubbleSort([-3, -1, 1, 3, 5, 9]),
      [-3, -1, 1, 3, 5, 9]
    );
  });

  await t.step("does not change an array of equal values", () => {
    assertEquals(bubbleSort([7, 7, 7, 7]), [7, 7, 7, 7]);
  });

  await t.step("correctly sorts input which is sorted in descending order", () => {
    assertEquals(
      bubbleSort([9, 5, 3, 1, -1, -3]),
      [-3, -1, 1, 3, 5, 9]
    );
  });

  await t.step("correctly sorts an input of random order", () => {
    assertEquals(
      bubbleSort([1, -3, 5, 9, -1, 3]),
      [-3, -1, 1, 3, 5, 9]
    );
  });
});
