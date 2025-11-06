const log: Console["log"] = console.log.bind(console);

/**
 * Performs an in-place swap of the elements of indexes p and q.
 */
function swap(arr: Array<unknown>, p: number, q: number): void {
  const tmp: unknown = arr[p];
  arr[p] = arr[q];
  arr[q] = tmp;
}

function part(xs: Array<number>, ini: number, end: number): number {
  const piv: number = xs[ini];
  let idx: number = ini;

  for (var i = ini + 1; i < xs.length; ++i) {
    if (piv > xs[i]) {
      ++idx;

      swap(xs, idx, i);
    }
  }

  swap(xs, ini, idx);

  return idx;
}

if (import.meta.main) {
  const xs = [50, 40, 70, 30, 10, 60, 20];

  log(part(xs, 0, xs.length));
}
