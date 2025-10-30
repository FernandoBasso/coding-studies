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

  await t.step("")
});
