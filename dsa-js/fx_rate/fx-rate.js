const log = console.log.bind(console);

/**
 * Converts amount to cents.
 *
 * The resulting cents are rounded due to the nature of the
 * IEEE 754 floating point specification that is implemented
 * in most languages to deal with floating point numbers.
 */
export function toCents(amount) {
  return Math.round(amount * 100);
}

/**
 * Computes a new amount by applying the foreign exchange rate.
 *
 * @params {number} amount
 * @params {number} fxRate
 */
export function calc(amount, fxRate) {
  log({amount, fxRate})
  return amount * fxRate;
}
