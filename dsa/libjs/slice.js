/**
 * Returns a slice of `xs` from `ini` (inclusive) to `end` (exclusive).
 *
 * @sig Number Number String -> String
 * @sig Number Number [a] -> [a]
 */
function slice(ini, end, xs) {
  return xs.slice(ini, end);
}

export { slice };
