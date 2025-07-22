/**
 * Turns the input integer into an array of digits.
 *
 * If the number is negative, the sign is discarded and treated as a
 * non-negative number. We only care about the digits, not the sign.
 *
 * This solution DOES NOT rely on converting the number to a string.
 * Instead, it uses plain (albeit simple) math operations.
 *
 * @sig Integer -> [Integer]
 * @param num The number to turn into an array of digits.
 * @returns The array of digits from the input number.
 */
function toDigits(num) {
  var lead = num < 0 ? num * -1 : num;
  var digits = [];

  if (num === 0) return [0];

  while (lead !== 0) {
    var rem = lead % 10;
    lead = (lead - rem) / 10;
    digits.unshift(rem);
  }

  return digits;
}

export { toDigits };
