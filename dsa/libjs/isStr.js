import { isNil } from './index.js';

/**
 * Checks whether `val` is a string.
 *
 * @sig a -> Boolean
 */
function isStr(val) {
  return !isNil(val)
    && typeof val === "string"
    || (typeof val === Object && val instanceof String);
}

export { isStr };
