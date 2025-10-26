import { floor } from "../lib.ts";

export function search(
  x: number,
  xs: Array<number>,
): boolean {
  return (function run(
    y: number,
    ys: Array<number>,
    lo: number,
    hi: number,
  ): boolean {
    if (lo >= hi)
      return false;

    const mid = floor(lo + (hi - lo) / 2);
    const val = ys[mid];

    if (y === val)
      return true;
    else if (y < val)
      return run(y, ys, lo, mid);
    else
      return run(y, ys, mid + 1, hi);
  })(x, xs, 0, xs.length);
}
