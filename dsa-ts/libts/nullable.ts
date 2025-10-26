const log = console.log.bind(console);

/**
 * Adds null and undefined as potential values of T.
 */
export type Nullable<T> = T | null | undefined;

/**
 * A Nil value is either null or undefined.
 */
export type Nil = null | undefined;

/**
 * Exclude null and undefined from T.
 */
export type NonNil<T> = T & {};

/**
 * A type guard to check whether t is nullable.
 */
export function isNil<T>(t: Nullable<T>): t is Nil {
  return (t === null || t === undefined);
}

/**
 * A type guard to check whether t is not nullable.
 */
export function isNotNil<T>(t: Nullable<T>): t is NonNil<T> {
  return !isNil(t);
}

export function isNull(v: unknown): v is null {
  return v === null;
}

export function isUndef(v: unknown): v is undefined {
  return v === undefined;
}
