const log: Console["log"] = console.log.bind(console);

function swap(xs: Array<Number>, i1: number, i2: number): void {
  let tmp = xs[i1];
  xs[i1] = xs[i2];
  xs[i2] = tmp;
}

/**
 * Bubble-sorts the input in place.
 */
export function bubbleSort(xs: Array<number>): Array<number> {
  const len = xs.length;

  for (let i = 0; i < len - 1; ++i)
    for (let j = 0; j < len - 1 - i; j++) {
      if (xs[j] > xs[j + 1])
        swap(xs, j, j + 1);
    }

  return xs;
}

if (require.main === module) {
  log(bubbleSort([0, 3, 1, -1, 2]));
}
