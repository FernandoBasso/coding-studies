import { assertEquals } from "@std/assert";
import { sumTo } from "./sum_to_v1.ts";

Deno.test("sum to n", async (t) => {
  await t.step("currectly sums to n", () => {
    assertEquals(sumTo(0), 0);
    assertEquals(sumTo(1), 1);
    assertEquals(sumTo(4), 10);

    ////
    // Larger numbers will cause stack size exceeded or similar as
    // ECMAScript does not feature tail call optimization.
    //
    assertEquals(sumTo(9_457), 44722153);
  });
});
