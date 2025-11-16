var log = console.log.bind(console);

/**
 * Merges two sorted arrays while keeping their sorting order.
 *
 * @sig ([a], [a]) -> [a]
 */
export function merge(xs, ys) {
  var i = 0,
      j = 0,
      xsLen = xs.length,
      ysLen = ys.length,
      res = [];

  while (i < xsLen && j < ysLen)
    if (xs[i] < ys[j])
      res.push(xs[i++]);
    else
      res.push(ys[j++]);

    if (i < xsLen)
      while (i < xsLen)
        res[j + i] = xs[i++];

    if (j < ysLen)
      while (j < ysLen)
        res[i + j] = ys[j++];

  return res;
}

/**
 * Sorts the input from smallest to largest.
 *
 * @sig [a] -> [a]
 */
export function msort(xs) {
  var len = xs.length;

  if (len <= 1)
    return xs;

  var midIdx = Math.floor(len / 2);

  var left = msort(xs.slice(0, midIdx));
  var right = msort(xs.slice(midIdx, len));

  return merge(left, right);
}

if (import.meta.main) {
  var res = msort([1, -1]);
  log(res);
}
