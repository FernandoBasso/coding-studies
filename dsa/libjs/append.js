/**
 * Appends `x` to `xs`.
 *
 * Does not mutate original `xs` but instead returns a new copy with `x`
 * appended.
 *
 * @sig a [a] -> [a]
 */
function append(x, xs) {
  return [...xs, x];
}

export { append };
