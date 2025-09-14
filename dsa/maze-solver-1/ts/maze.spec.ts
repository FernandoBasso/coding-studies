import { log } from "../../libts";
import { type Point, solve } from "./maze";

function drawPath(data: Array<string>, path: Array<Point>): Array<string> {
  const drawn = data.map(row => row.split(""));

  path.forEach(p => {
    if (drawn[p.y] && drawn[p.y][p.x])
      drawn[p.y][p.x] = "*";
  });

  return drawn.map(d => d.join(""));
}

/**
 * Represent the maze as an array of strings in TypeScript.
 *
 * Start is at row 0, column 11: { x: 10, y: 0 }.
 *
 * Exit is at row 5, column 1: { x: 1, y: 5 }.
 */
const maze: Array<string> = [
  "##########S#",
  "#   #####  #",
  "#   #     ##",
  "##### #### #",
  "#     ######",
  "#E##########",
];
const expected: Array<Point> = [
  { x: 10, y: 0 },
  { x: 10, y: 1 },
  { x: 9, y: 1 },
  { x: 9, y: 2 },
  { x: 8, y: 2 },
  { x: 7, y: 2 },
  { x: 6, y: 2 },
  { x: 5, y: 2 },
  { x: 5, y: 3 },
  { x: 5, y: 4 },
  { x: 4, y: 4 },
  { x: 3, y: 4 },
  { x: 2, y: 4 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
];

describe("maze solve()", () => {
  it("should create the correct solution path", () => {
    const actual: Array<Point> = solve(
      maze,
      "#",
      { x: 10, y: 0 },
      { x: 1, y: 5 },
    );
    // const expected: Array<Point> = [];

    log({ actual })
    expect(drawPath(maze, actual)).toEqual(drawPath(maze, expected));
  });
});
