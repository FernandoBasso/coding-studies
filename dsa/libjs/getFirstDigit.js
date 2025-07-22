/**
 * Returns the first digit of a number.
 *
 * @category math
 * @sig Number -> Number
 * @param {number} num
 * @returns {number}
 */
function getFirstDigit(num) {
  if (num < 0) throw new RangeError('num must be >= 0');

  var x = num;
  while (x >= 10) x /= 10;
  return x | 0;
}

export { getFirstDigit };
