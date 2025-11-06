const floor = Math.floor.bind(Math);

/**
 * Binary-searches the haystack for the needle.
 *
 * ASSUME: The input is sorted.
 */
export function search(
  needle: number,
  haystack: Array<number>,
): boolean {
  return (function run(
    x: number,
    xs: Array<number>,
    lo: number,
    hi: number,
  ): boolean {
    if (lo >= hi)
      return false;

    const mid = floor(lo + (hi - lo) / 2);
    const val = haystack[mid];

    if (needle === val)
      return true;
    else if (needle < val)
      return run(x, xs, lo, mid);
    else
      return run(x, xs, mid + 1, hi);
  })(needle, haystack, 0, haystack.length);
}
