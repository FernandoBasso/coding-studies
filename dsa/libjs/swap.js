/**
 * Swaps two elements in an array.
 *
 * **IMPORTANT**: This is an impure operation as it changes/mutates the
 * input array. Note that we don't even return `xs`.
 *
 * We do this for performance reasons as mutating an array in place is
 * infinitely more performant than making a copy of an entire array just
 * to swap two elements.
 *
 * @sig [a] Int Int -> [a]
 * @param {unknown[]} xs
 * @param {number} idx1
 * @param {number} idx2
 */
function swap(xs, idx1, idx2) {
  [xs[idx1], xs[idx2]] = [xs[idx2], xs[idx1]];
}

export { swap };
