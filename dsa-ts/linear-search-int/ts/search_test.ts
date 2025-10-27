import { assertEquals } from "@std/assert";
import { search } from "./search_v1.ts";

Deno.test("search()", async (t) => {
  await t.step("should find nothing if input is empty", () => {
    assertEquals(search(1, []), false);
  });

  await t.step("should find if anywhere in the array", () => {
    assertEquals(search(1, [1]), true);
    assertEquals(search(1, [-5, 1, 3]), true);
    assertEquals(search(1, [-5, 3, 1]), true);
  });
});
