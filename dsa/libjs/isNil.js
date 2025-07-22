/**
 * Checks whether a value is `undefined` or `null`.
 *
 * @sig a -> Boolean
 */
function isNil(val) {
  return val === undefined || val === null;
}

export { isNil };
