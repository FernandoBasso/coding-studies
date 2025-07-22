import {
  isArr,
  isStr,
} from './index.js';

function concat(xs, ys) {
  var msg = 'concat(): both inputs must be arrays or strings.';

  if ((!isStr(xs) || !isStr(ys)) && (!isArr(xs) || !isArr(ys)))
    throw new TypeError(msg);

  return xs.concat(ys);
}

export { concat };
