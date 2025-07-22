//
// Shorter names for Math methods.
//
var sign = Math.sign.bind(Math);
var abs = Math.abs.bind(Math);
var floor = Math.floor.bind(Math);
var log10 = Math.log10.bind(Math);
var pow = Math.pow.bind(Math);
var sqrt = Math.sqrt.bind(Math);
var max = Math.max.bind(Math);

export { abs } from './abs.js';

export {
  sign,
  abs,
  pow,
  sqrt,
  floor,
  log10,
  max,
};

export { length } from './length.js';
export { isArr } from './isArr.js';
export { swap } from './swap.js';
export { head } from './head.js';
export { tail } from './tail.js';
export { concat } from './concat.js';
export { append } from './append.js';
export { slice } from './slice.js';
export { isEmpty } from './isEmpty.js';
export { isNil } from './isNil.js';
export { isObj } from './isObj.js';
export { isStr } from './isStr.js';
export { keys } from './keys.js';
export { upcase } from './upcase.js';

export { remove } from './remove.js';

export { isEven } from './isEven.js';
export { isOdd } from './isOdd.js';

//
// Numbers and digits related helpers.
//
export{ dropDigits } from './dropDigits.js';
export { takeDigits } from './takeDigits.js';
export { getFirstDigit } from './getFirstDigit.js';
export { containsDigit } from './containsDigit.js';
export { toDigits } from './toDigits.js';
export { countDigits } from './countDigits.js';
export { numToDigits } from './numToDigits.js';
export { getLastDigit } from './getLastDigit.js';
export { getDigit } from './getDigit.js';
