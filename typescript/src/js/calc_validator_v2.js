import { log } from '../utils';

function withValidator(validatorFn, fn) {
  return function validatedFn (...args) {
    if (!args.every(validatorFn))
      throw TypeError('Ivalid argument type.');

    return fn(...args);
  };
}

function mult(x, y) {
  return x * y;
}

function product(...nums) {
  return nums.reduce(mult, 1);
}

function isInt(v) {
  return Number.isInteger(v);
}

function isStr(v) {
  return typeof v === 'string';
}

function join(...strs) {
  return strs.reduce(function joiner(str, s) {
    return str += ' ' + s;
  }, '');
}

// Decorate product with isInt validator.
const multiply = withValidator(isInt, product);

log(multiply(1, 2, 3, 4));
//=> 24

// Decorate join with isStr validator
const joinStrs = withValidator(isStr, join);

log(joinStrs('foo', 'bar', 'qux'));
//=> 'foo bar qux'

// log(joinStrs('foo', 1, 'bar'));
// ~ TypeError: Invalid argument type.

// log(multiply(1, NaN));
// ~ TypeError: Arguments must be numbers.
