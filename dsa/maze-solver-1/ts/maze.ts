/*

Sample mazes.

#############################
#        #     ########     E
##### ## #     ###       ####
#     #  #### ##### #########
# ######      ###   #   #####
S  ###            #####  ####
#############################

Wall: #
Start: S
End: E

A maze with a single solution.

    ##########S#
    #   #####  #
    #   #     ##
    ##### #### #
    #     ######
    #E##########


Represent the maze as an array of strings in TypeScript.
Start is at row 0, column 11: { x: 10, y: 0 }.
Exit is at row 5, column 1: { x: 1, y: 5 }.
const maze: Array<string> = [
  "##########S#",
  "#   #####  #",
  "#   #     ##",
  "##### #### #",
  "#     ######",
  "#E##########",
];
*/

import { log } from "../../libts";

export type Point = {
  x: number;
  y: number;
};

const dir: Array<[number, number]> = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * The function that actually recurses and solves the maze.
 *
 * The first four parameters are the same as in the
 * entry-point solve() function. Then there are extra
 * paramters that help with the solution and to keep the
 * current state of affairs as we recurse.
 */
function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: Array<Array<boolean>>,
  path: Array<Point>,
): boolean {
  const colsLen: number = maze[0].length;
  const rowsLen: number = maze.length;

  ////
  // If we are before the first row or column, or after the
  // first row or column, which means, we are off the edges.
  //
  if (
    curr.x < 0 || curr.x >= colsLen ||
    curr.y < 0 || curr.y >= rowsLen
  ) {
    return false;
  }

  ////
  // If on a wall.
  //
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  ////
  // If curr coords is the same as end coords, then
  // we found the exit.
  //
  if (curr.x === end.x && curr.y === end.y) {
    path.push({ x: curr.x, y: curr.y });
    return true;
  }

  ////
  // If we have visited that point before.
  //
  if (seen[curr.y][curr.x]) {
    return false;
  }

  ////
  // Keep track of the current point so we can build the
  // whole path we have been walking so far.
  //
  seen[curr.y][curr.x] = true;
  path.push({ x: curr.x, y: curr.y });

  ////
  // Recurse.
  //
  for (let i = 0; i < dir.length; ++i) {
    const [x, y] = dir[i];
    log({ x, y });

    if (walk(
      maze,
      wall,
      {
        x: curr.x + x,
        y: curr.y + y,
      },
      end,
      seen,
      path
    )) {
      log({ path });
      return true
    };
  }

  ////
  // If we get to this point, it means that point was no good
  // for one reason or another, so we remove it from path as
  // it doesn't lead to the exit.
  //
  path.pop();

  return false;
}

/**
 * Entry point for the maze solver. It does not recurse
 * itself. It instead delegates the algorithm and recursion
 * to the walk() function.
 */
export function solve(
  maze: string[],
  wall: string,
  start: Point,
  exit: Point,
): Array<Point> {
  const seen: Array<Array<boolean>> = [];
  const path: Array<Point> = [];
  const numCols: number = maze[0].length;

  for (let i = 0; i < maze.length; ++i)
    seen.push(new Array(numCols).fill(false));

  walk(maze, wall, start, exit, seen, path);

  return path;
}
