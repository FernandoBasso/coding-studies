import { log } from ".";

/**
 * Try this!
 */
export function len<T extends string | Array<unknown>>(xs: T): number {
  return xs.length;
}

len([])

// getName gets the user name.
function getName({ name, email }: { name: string; email: string }): string {
  return `${name}: ${email}`;
}

log(getName({ name: "Yoda", email: "yoda@jedi.dev" }));

