const log: Console["log"] = console.log.bind(console);

function swap(xs: Array<number>, i1: number, i2: number): void {
  const tmp = xs[i1];
  xs[i1] = xs[i2];
  xs[i2] = tmp;
}

/**
 * Bubble-sorts the input in place.
 */
export function bubbleSort(xs: Array<number>): Array<number> {
  const len = xs.length;

  for (let i = 0; i < len; ++i)
    for (let j = 0; j < len - 1 - i; j++) {
      if (xs[j] > xs[j + 1])
        swap(xs, j, j + 1);
    }

  return xs;
}

if (import.meta.main) {
  log(bubbleSort([0, 3, 1, -1, 2]));
}
