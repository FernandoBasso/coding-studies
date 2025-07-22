import { abs, countDigits } from './index.js';

/**
 * Drops the first `len` digits from `num`.
 *
 * @example
 * dropDigits(1234, 2);
 * // → 34
 *
 * dropDigits(123, 3);
 * // → 123
 *
 * dropDigits(123, 4);
 * // → 123
 *
 * @param {number} num The number to drop the first `len` digits from.
 * @param {number} len The number of digits to drop from the beginning
 *   of the number. It has to be less than the number of digits in the
 *   number.
 * @returns {number} The number with `len` digits dropped from its
 *   beginning or the unmodified number if `len` is less than the number
 *   of digits in the input number.
 */
function dropDigits(num, len) {
  var n = abs(num);

  if (countDigits(n) <= len) return n;

  var out = 0;
  var numLen = countDigits(n);

  for (var exp = 0; exp < numLen - len; ++exp) {
    var last = n % 10 * 10 ** exp;
    var n = n / 10 | 0;
    out = last + out;
  }

  return out;
}

export { dropDigits };
