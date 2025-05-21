/**
 * Sums an array of numbers.
 *
 * This solution uses a for loop in a procedural style.
 *
 * **TIME COMPLEXITY**: O(n). We iterate once for each element of the
 * input array of numbers.
 *
 * **SPACE COMPLEXITY**: O(1). We simply add to the `total` variable.
 *
 * @param xs The array of numbers to sum.
 * @returns The sum.
 */
function sum(xs: number[]): number {
  let total: number = 0;

  for (let i: number = 0; i < xs.length; ++i)
    total += xs[i];

  return total;
}

export { sum };
