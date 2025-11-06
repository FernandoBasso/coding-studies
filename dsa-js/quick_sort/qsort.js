const log = console.log.bind(console);

/**
 * Performs an in-place swap of elements at indexes p and q.
 */
function swap(arr, p, q) {
  var tmp = arr[p];
  arr[p] = arr[q];
  arr[q] = tmp;
}

function part(xs, ini, end) {
  var piv = xs[ini];
  var idx = ini;

  for (var i = ini + 1; i < end; ++i) {
    log({ i, piv, "xs[i]": xs[i] });
    if (piv > xs[i]) {
      ++idx;
      swap(xs, idx, i);
    }
  }

  swap(xs, ini, idx);
  log(xs);

  return idx;
}

if (import.meta.main) {
  var xs = [50, 10, 20, 60, 30, 40];

  log(part(xs, 0, xs.length));
}


/*

idx keeps track of how many elements are less than the pivot,
or, which is the index will be moved to at the end (after the
loop).

*/
