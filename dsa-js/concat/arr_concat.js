const log = console.log.bind(console);

export function concat(xs, ys) {
  var xsLen = xs.length,
      ysLen = ys.length,
      i = 0,
      j = 0,
      concated = Array(xsLen + ysLen);

  while (i < xsLen)
    concated[i] = xs[i++];

  while (j < ysLen)
    concated[i + j] = ys[j++];

  return concated;
}

if (import.meta.main) {
  var xs = [10, 20, 30];
  var ys = [100, 200, 300];
  var res = concat(xs, ys);
  log(res);
}
