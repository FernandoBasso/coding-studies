import { assertEquals } from "@std/assert";
import { qsort } from "./qsort.ts";

Deno.test("Quick Soft", async (t) => {
  await t.step("empty array", () => {
    const arr: Array<number> = [];
    qsort(arr);
    assertEquals(arr, []);
  });

  await t.step("single-element array", () => {
    const arr: Array<number> = [99];
    qsort(arr);
    assertEquals(arr, [99]);
  });

  await t.step("multiple-element array", () => {
    const arr1: Array<number> = [1, 5];
    qsort(arr1);
    assertEquals(arr1, [1, 5]);

    const arr2: Array<number> = [5, 1];
    qsort(arr2);
    assertEquals(arr2, [1, 5]);

    const arr3: Array<number> = [-42, 1, 9, 9, 9];
    qsort(arr3);
    assertEquals(arr3, [-42, 1, 9, 9, 9]);

    const arr4: Array<number> = [9, 9, 9, -42, 1];
    qsort(arr4);
    assertEquals(arr4, [-42, 1, 9, 9, 9]);
  });
});
