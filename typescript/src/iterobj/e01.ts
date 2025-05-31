//
// https://fettblog.eu/typescript-iterating-over-objects/
//

import { log } from "../utils";

type Person = {
  id: number;
  name: string;
};

const p1: Person = {
  id: 1,
  name: "Ahsoka",
};

function isKey<T extends object>(key: PropertyKey, obj: T): key is keyof T {
  return key in obj;
}

function print1(p: Person): void {
  Object.keys(p).forEach((k) => {
    if (isKey(k, p)) log(p[k]);
  });
}

print1(p1);

const aayla = {
  id: 2,
  name: "Aayla Secura",
  skill: "Lightsaber",
};

print1(aayla);

function print2<T extends Person>(p: T): void {
  for (let k in p) log(p[k]);
}

function print3<T extends Person>(p: T): void {
  let key;

  for (key in p) log(p[key]);
  // Becase k is defined outside the loop
  // parentheses, it allows the type checker
  // to infer it may not be a key of p.

  // But we can do this!
  let prop: keyof typeof p;
  for (prop in p) log(p[prop]);
}

////////////////////////////////////////////////////////////////////////

function print4(p: Person): void {
  Object.keys(p).forEach((k) => {
    log(p[k]);
    // Object.keys() returns string[].
    // string means every possible string in the
    // known universe. Our person contains only
    // a few specific strings.

    if (isKey(k, p)) log(p[k]);
  });
}
