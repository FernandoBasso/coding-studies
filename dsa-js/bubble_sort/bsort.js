const log = console.log.bind(console);

function swap(xs, p, q) {
  return [xs[p], xs[q]] = [xs[q], xs[p]];
}

export function bsort(xs) {
  var len = xs.length;

  for (var i = 0; i < len; ++i)
    for (var j = 0; j < len - i; ++j)
      if (xs[j] > xs[j + 1])
        swap(xs, j, j + 1);

  return xs;
}

if (import.meta.main) {
  var xs = [1, 2, 3];
  swap(xs, 0, 2);
  log(xs);
}
