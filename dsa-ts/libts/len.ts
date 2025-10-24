export function len<T extends string | Array<unknown>>(xs: T): number {
  return xs.length;
}
