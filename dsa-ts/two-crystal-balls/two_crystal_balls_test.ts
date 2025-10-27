import { assertEquals } from "@std/assert";
import { twoCrystalBalls } from "./two_crystal_balls_v2.ts";

Deno.test("two crystal balls", async (t) => {
  await t.step("no floor causes the ball to break", () => {
    // The ball doesn't break from any of these floors.
    assertEquals(twoCrystalBalls(new Array(8912).fill(false)), -1);
  });

  await t.step("ball breaks, large number of floors", () => {
    const breakIdx = Math.floor(Math.random() * 15e6);
    const floors = new Array(15e6).fill(false);

    for (let i = breakIdx; i < 15e6; ++i) {
      // All floors >= breakIdx are set to true to indicate
      // the ball breaks of dropped from any of those floors.
      floors[i] = true;
    }

    assertEquals(twoCrystalBalls(floors), breakIdx);
  });
});
