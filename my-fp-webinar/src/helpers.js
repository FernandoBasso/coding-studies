
const l = console.log.bind(console);

var log = function log (label, thing) {
  const padd = '-'.repeat(40).substr(label.length);
  l(`→ ${padd} ${label}:`, thing);
  l('\n');
};

const curry = function curry (fn) {
  return function currify () {
    const args = Array.prototype.slice.call(arguments);
    return args.length >= fn.length ?
      fn.apply(null, args) :
      currify.bind(null, ...args)
  };
};

const toUpper = function toUpper (s) {
  return s.toUpperCase();
};

// var compose = (...fns) =>
//   (...args) =>
//     fns.reduceRight((res, fn) =>
//                     [fn.call(null, ...res)], args)[0];

const compose = function compose (...fns) {
  return function inner (...args) {
    return fns.reduceRight(function reduced (res, fn) {
      return [fn.call(null, ...res)];
    }, args)[0];
  };
};

// pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const pipe = function pipe (...fns) {
  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  }
};

const id = arg => arg;

const last = function last (list) {
  return list[list.length - 1];
}

const split = curry(function split (c, s) {
  return s.split(c);
});

const lower = function lower (s) {
  return s.toLowerCase();
};

const upper = function upper (s) {
  return s.toUpperCase();
};

const map = function map (fn) {
  return function mapped (items) {
    return items.map(fn);
  };
};

// const map = fn => items => items.map(fn);

export {
  l,
  log,
  curry,
  toUpper,
  compose,
  pipe,
  id,
  last,
  lower,
  upper,
  split,
  map,
};


