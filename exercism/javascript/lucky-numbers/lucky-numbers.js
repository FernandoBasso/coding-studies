// @ts-check

/**
 * Turns an array of integers into the a single number.
 *
 * @sig [number] -> number
 * @param {number[]} digits
 * @returns {number}
 *
 * @example
 * digitsToNumber([5, 7, 4]).
 * //=> 574
 */
function digitsToNum(digits) {
  let num = 0,
        i = 0;

  while (i < digits.length)
    num = num * 10 + digits[i++];

  return num;
}

/**
 * Converts a number to an array of its digit constituents.
 *
 * @sig number -> [number]
 * @param {number} num
 * @returns {number[]}
 *
 * @example
 * toDigits(749);
 * /=> [7, 4, 9]
 */
function toDigits(num) {
  let digits = [];

  while (num >= 10) {
    digits.unshift(num % 10);
    num = num / 10 | 0;
  }

  digits.unshift(num | 0);

  return digits;
}

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return digitsToNum(array1) + digitsToNum(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const digits = toDigits(value);

  return (function loop(xs, ini, end) {
    if (ini >= end)
      return true;

    return xs[ini] === xs[end]
      ? loop(xs, ++ini, --end)
      : false;
  }(digits, 0, digits.length - 1));
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === undefined || input === null || input === "")
    return "Required field";

  const num = Number(input);

  if (Number.isNaN(num) || num === 0)
    return "Must be a number besides 0";

  return "";
}
