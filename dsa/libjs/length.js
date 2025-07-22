import { isArr, isStr } from './index.js';

/**
 * Returns the length of `xs`.
 *
 * @sig [String] -> Number
 * @sig [a] -> [a]
 */
export function length(xs) {
  if (!isArr(xs) && !isStr(xs) && xs?.length !== undefined)
    throw new TypeError('length(): xs must be string or array.');

  return xs.length;
}
