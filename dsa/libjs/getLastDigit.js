/**
 * Returns the last digit of a number.
 *
 * The number must not contain a decimal place. That is, 35.7 is an
 * invalid input for this function and will result an exception, while
 * 357 is valid, and will return 7.
 *
 * @category math
 * @signature Number -> Number
 * @param {number} num
 * @returns {number}
 */
function getLastDigit(num) {
  if (!Number.isInteger(num))
    throw new RangeError('num must be an integer');

  return num % 10;
}

export { getLastDigit };
