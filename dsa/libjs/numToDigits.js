import { abs } from './index.js';

/**
 * Turns a number into an array of its digits.
 *
 * @category List
 * @signature number -> Number[]
 * @param {number} num
 * @returns {number[]}
 * @example
 * numToDigits(-1894);
 * // → [1, 9, 8, 4]
 */
function numToDigits(num) {
  var n = abs(num);
  var digits = [];

  while (n >= 10) {
    var last = n % 10;
    n = n / 10 | 0;

    digits.unshift(last);
  }

  digits.unshift(n | 0);

  return digits;
}

export { numToDigits };
