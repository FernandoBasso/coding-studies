import { assertEquals } from "@std/assert";
import { search } from "./search.ts";

Deno.test("Binary Search", async (t: Deno.TestContext) => {
  await t.step("should find nothing if input is empty", () => {
    assertEquals(search(1, []), false);
  });

  await t.step("should find the value on the very middle the first time", () => {
    assertEquals(search(5, [1, 3, 5, 7, 9]), true);
  });

  await t.step("finds the value on the middle of the first left half", () => {
    assertEquals(search(2, [1, 2, 3, 4, 5, 6, 7]), true);
  });

  await t.step("finds the value on the left of the first left half", () => {
    assertEquals(search(1, [1, 2, 3, 4, 5, 6, 7]), true);
  });

  await t.step("finds the value on the right of the first left half", () => {
    assertEquals(search(3, [1, 2, 3, 4, 5, 6, 7]), true);
  });

  await t.step("finds the value on the middle of the first right half", () => {
    assertEquals(search(6, [1, 2, 3, 4, 5, 6, 7]), true);
  });

  await t.step("finds the value on the left of the first right half", () => {
    assertEquals(search(5, [1, 2, 3, 4, 5, 6, 7]), true);
  });

  await t.step("finds the value on the right of the first right half", () => {
    assertEquals(search(7, [1, 2, 3, 4, 5, 6, 7]), true);
  });
});
