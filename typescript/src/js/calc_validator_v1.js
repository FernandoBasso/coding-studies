import { log } from '../utils';

function sum(x, y) {
  return x * y;
}

function product(...nums) {
  return nums.reduce(sum, 1);
}

function isInt(v) {
  return Number.isInteger(v);
}

function withValidator(fn) {
  return function validatedFn (...args) {
    if (!args.every(isInt))
      throw TypeError('Arguments must be numbers.');

    return fn(...args);
  };
}

const multiply = withValidator(product);

log(multiply(1, 2, 3, 4));
//=> 24

// log(multiply(1, NaN));
// TypeError

/*

These types of decorators are possible because the language supports
higher-order functions.

*/
