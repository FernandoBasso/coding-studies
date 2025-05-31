

/*

- OK: Uses `discount` as an explicit parameter.

*/


/* eslint-disable no-unused-vars */
import { l, log } from './helpers';

let defaultDiscount = 10;

//
//
// OK: `discount` now is an implicit parameter and our function
// does NOT depend on hidden, implicit inputs.
//
const applyDiscount = (discount, value) => {
  return value - value * discount / 100;
};

log(
  'applyDiscount(discount, 100))',
  applyDiscount(defaultDiscount, 100)
);

log(
  'return value === 88',
  applyDiscount(12.5, 100) === 87.5
);

