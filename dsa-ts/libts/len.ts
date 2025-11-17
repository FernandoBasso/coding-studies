/**
 * Returns the length of any object that has the length property.
 */
export function len<T extends string | Array<unknown>>(xs: T): number {
  return xs.length;
}
