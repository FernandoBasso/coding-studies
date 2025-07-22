/**
 * Removes the first occurrence of `x` in `xs`.
 *
 * @param {number | string} x
 * @param {Array<number | string>} xs
 * @returns {Array<number | string>}
 */
function remove(x, xs) {
  var i,
      curr,
      skipped = false,
      res = [];

  for (i = 0; i < xs.length; ++i) {
    var curr = xs[i];

    if (curr === x && !skipped) {
      skipped = true;
      continue;
    }

    res.push(curr);
  }

  return res;
}

// remove(3, [1, 2, 3, 3, 4])
//                        ^
// res = [1, 2, 3, 4]

export { remove };
