/**
 * Checks if a value is either null or undefined.
 *
 * Only the actual `null` and `undefined` will return `true`. Any other
 * value will return cause this function to return `false`.
 */
export function isNil(v: unknown): boolean {
  return v === undefined || v === null;
}
