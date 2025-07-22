import { abs, pow, countDigits } from './index.js';

/**
 * Take the first `len` digits from `num`.
 *
 * Negative numbers are treated as positive.
 *
 * If the number of digits in `num` is less than or equal to
 * `len`, simply return `num`.
 *
 * @example
 * takeDigits(1984, 4);
 * // → 1984
 *
 * takeDigits(-1984, 2);
 * // → 19
 *
 * @param {number} num
 * @param {number} len
 * @returns {number}
 */
function takeDigits(num, len) {
  if (typeof len !== "number" || len < 1)
    throw new RangeError("len must be a number >= 1");

  if (num === 0) return num;

  var n = abs(num);
  var numDigits = countDigits(n);

  if (numDigits <= len)
    return n | 0;

  return (n / pow(10, numDigits - len)) | 0;
}

export { takeDigits };
