const log = console.log.bind(console);

/**
 * Performs an in-place swap of elements at indexes p and q.
 */
function swap(arr, p, q) {
  var tmp = arr[p];
  arr[p] = arr[q];
  arr[q] = tmp;
}

function partition(xs, ini, end) {
  var piv = xs[ini];
  var idx = ini;

  for (var i = ini + 1; i < xs.length; ++i)
    if (piv > xs[i])
      swap(xs, ++idx, i);

  swap(xs, ini, idx);

  return idx;
}

export function qsort(arr, ini = 0, end = arr.length) {
  if (ini >= end)
    return arr;

  var pidx = partition(arr, ini, end);
  qsort(arr, ini, pidx - 1);
  qsort(arr, pidx + 1, end);
}

if (import.meta.main) {
  var xs = [50, 10, 20, 60, 30, 40];

  qsort(xs, 0, xs.length);
  log(xs);
}

/*

idx keeps track of how many elements are less than the pivot,
or, which is the index will be moved to at the end (after the
loop).

*/
