const log = console.log.bind(console);

/**
 * Merges xs and ys keeping their sorting order.
 *
 * @sig ([a], [a]) -> [a]
 */
export function merge(xs, ys) {
  var xsLen = xs.length,
      ysLen = ys.length,
      i = 0,
      j = 0,
      merged = Array(xsLen + ysLen);

  while (i < xsLen && j < ysLen)
    if (xs[i] < ys[j])
      merged[i + j] = xs[i++];
    else
      merged[i + j] = ys[j++];

  if (i < xsLen)
    while (i < xsLen)
      merged[i + j] = xs[i++];

  if (j < ysLen)
    while (j < ysLen)
      merged[j + i] = ys[j++];

  return merged;
}

if (import.meta.main) {
  var xs = [5];
  var ys = [3, 4, 6];
  var res = merge(xs, ys);
  log(res);
  //=> [ 3, 4, 5, 6 ]
}
