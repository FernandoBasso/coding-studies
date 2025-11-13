var log = console.log.bind(console);

export function merge(xs, ys) {
  var i = 0,
      j = 0,
      xsLen = xs.length,
      ysLen = ys.length
      res = [];

  while (i < xsLen && j < ysLen)
    if (xs[i] < ys[j])
      res.push(xs[i++]);
    else
      res.push(ys[j++]);

    if (i === xsLen)
      res.push(...ys.slice(j));

    if (j === ysLen)
      res.push(...ys.slice(i));

  return res;
}

export function msort() {
}

if (import.meta.main) {
  merge([1], [2]);
}
