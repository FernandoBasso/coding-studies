/*

NOK: hidden input (`discount`).

NOK: same input produces different output.

*/

/* eslint-disable no-unused-vars */
import { l, log } from './helpers';

let discount = 12;


//
// NOK: `discount` is a _hidden input_ to the function.
//
const applyDiscount = (value) => {
  return value - (value * discount) / 100;
};

log('applyDiscount(100)', applyDiscount(100));

log('return value === 90', applyDiscount(100) === 90);

//
// How to test that other discount values also produce
// a correct output‽ For instance, how to test that if
// the `discount` is 8, the result is indeed 92‽
//
// Code that is hard (or impossible) to test is
// a code smell.
//

log('return value === 88', applyDiscount(100) === 88);
