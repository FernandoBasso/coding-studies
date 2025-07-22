import { abs, log10 } from './index.js';

/**
 * Returns the number of digits in `num`.
 *
 * @param {number} num
 * @returns {number}
 */
export function countDigits(num) {
  if (num === 0) return 1;
  return (log10(abs(num)) + 1) | 0;
}
