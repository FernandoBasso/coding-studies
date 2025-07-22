import { abs } from './index.js';

/**
 * Gets `pos` digit from `num`. Right to left, zero-indexed.
 *
 * For example, with 795:
 *
 * - 5 is the 0th digit
 * - 9 is the 1st digit
 * - 7 is the 2nd digit
 *
 * For negative integers
 *
 * If the position cannot be gotten, return 0.
 *
 * @example
 * getDigit(17329, 0);
 * //=> 9
 *
 * getDigit(17329, 3);
 * //=> 7
 *
 * getDigit(17329, 4);
 * //=> 1
 *
 * getDigit(42, 2);
 * //=> 0
 *
 * @sig Int Int -> Int
 */
function getDigit(num, pos) {
  return (abs(num) / 10 ** pos | 0) % 10;
}

export { getDigit };
