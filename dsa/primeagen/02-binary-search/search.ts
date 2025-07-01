const floor = Math.floor.bind(Math);
const log = console.log.bind(console);

/**
 * Binary-searches the haystack for the needle.
 *
 * ASSUME: The input is sorted.
 */
export function search(
  needle: number,
  haystack: Array<number>,
): boolean {
  let lo: number = 0,
    hi: number = haystack.length,
    val: number,
    mid: number;

  do {
    mid = floor(lo + (hi - lo) / 2);
    val = haystack[mid];

    if (needle === val) return true;
    else if (needle < val) hi = mid;
    else lo = mid + 1;
  } while (lo < hi);

  return false;
}
