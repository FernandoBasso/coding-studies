import { twoCrystalBalls } from "./two_crystal_balls_v2";

describe("two crystal balls", () => {
  it("no floor causes the ball to break", function () {
    // The ball doesn't break from any of these floors.
    expect(twoCrystalBalls(new Array(8912).fill(false))).toEqual(-1);
  });

  it("ball breaks, large number of floors", () => {
    let breakIdx = Math.floor(Math.random() * 15e6);
    const floors = new Array(15e6).fill(false);

    for (let i = breakIdx; i < 15e6; ++i) {
      // All floors >= breakIdx are set to true to indicate
      // the ball breaks of dropped from any of those floors.
      floors[i] = true;
    }

    expect(twoCrystalBalls(floors)).toEqual(breakIdx);
  });
});
