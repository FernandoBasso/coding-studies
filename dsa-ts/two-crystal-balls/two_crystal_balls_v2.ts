const log = console.log.bind(console);
const floor = Math.floor.bind(Math);
const sqrt = Math.sqrt.bind(Math);

/**
 * Returns the floor in which the crystal ball breaks or -1 if
 * there is no floor in which it breaks.
 */
export function twoCrystalBalls(floors: Array<boolean>): number {
  const len = floors.length,
        jumpSize = floor(sqrt(floors.length));
  let i = 0;

  for (; i < len; i += jumpSize) {
    if (floors[i])
      break;
  }

  i -= jumpSize;

  for (; i < len; ++i)
    if (floors[i])
      return i;

  return -1;
}

if (import.meta.main) {
  log(twoCrystalBalls([!!0, !!0, !!0, !!0, !!1, !!1, !!1, !!1, !!1]));
}
