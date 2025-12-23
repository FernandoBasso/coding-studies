// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const min = 1e3;
  const max = 1e4 - 1;
  const num = (min + Math.random() * (max - min)) | 0;

  return `NCC-${num}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const min = 41_000,
        max = 42_000;

  return (min + Math.random() * (max - min));
}

/**
 * Generates a random integer between min and max.
 *
 * ASSUME: max > min.
 *
 * @param {number} min Inclusive.
 * @param {number} max Exclusive.
 */
function randInt(min, max) {
  return (min + Math.random() * (max - min)) | 0;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const classes = "DHJKLMNRTY";
  return "DHJKLMNRTY"[randInt(0, classes.length)];
}
