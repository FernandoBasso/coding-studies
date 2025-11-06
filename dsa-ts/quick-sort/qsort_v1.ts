const log: Console["log"] = console.log.bind(console);

/**
 * Partitions the array into and returns the pivot index.
 *
 * @param arr The array to partition.
 * @param lo The low index of the range.
 * @param hi The high index of the range.
 */
function partition(arr: Array<number>, lo: number, hi: number): number {
  const pivot = arr[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      ++idx;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  ++idx;

  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

if (import.meta.main) {
  var xs = [5, 1, 3, 2, 7];
  var i = partition(xs, 0, xs.length);
  log(i)
}

function qs(arr: Array<number>, lo: number, hi: number): void {
  if (lo >= hi)
    return;

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

export function qsort(xs: Array<number>): void {
  qs(xs, 0, xs.length - 1);
}
