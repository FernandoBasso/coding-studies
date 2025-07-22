import { isStr, isArr } from './index.js';

/**
 * Checks whether the `xs` is an empty array or string.
 *
 * @sig [a] -> Boolean
 */
function isEmpty(xs) {
  if (!isStr(xs) && !isArr(xs))
    throw new TypeError("isEmpty(): input must be an array or string.");

  return xs.length === 0;
}

export { isEmpty };
