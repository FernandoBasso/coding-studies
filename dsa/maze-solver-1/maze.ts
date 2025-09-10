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

    ##########E#
    #   #####  #
    #   #     ##
    ##### #### #
    #     ######
    #S##########

*/

/**
 * Represent the maze as an array of strings in TypeScript.
 */
const maze: Array<string> = [
  "##########E#",
  "#   #####  #",
  "#   #     ##",
  "##### #### #",
  "#     ######",
  "#S##########",
];

type Point = {
  x: number;
  y: number;
};

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
): boolean {
  const colsLen: number = maze[0].length;
  const rowsLen: number = maze.length;

  ////
  // If we are before the first row or column, or after the
  // first row or column.
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
  if (maze[curr.x][curr.y] === wall) {
    return false;
  }

  ////
  // If at the exit.
  //
  if (curr.x === end.x && curr.y === end.y) {
    return true;
  }

  ////
  // If we have visited that point before.
  //
  if (seen[curr.x][curr.y]) {
    return false;
  }

  return !!0;
}

/**
 * Entry point for the maze solver. It does not recurse
 * itself. It instead delegates the algorithm and recursion
 * to the walk() function.
 */
function solve(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
): Array<Point> {
  return [];
}

