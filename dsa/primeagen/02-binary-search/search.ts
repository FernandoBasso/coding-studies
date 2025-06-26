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
  let lo: number = 0;
  let hi: number = haystack.length;
  let val: number;
  var c = 0;
  do {
    let mid: number = floor(lo + (hi - lo) / 2);
    val = haystack[mid];

    if (val === needle) return true;
    else if (needle < val) hi = mid;
    else lo = mid + 1;
  } while (lo < hi);

  return false;
}
