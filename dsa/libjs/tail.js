import {
  isArr,
  isStr,
  isEmpty,
} from './index.js';

function tail(xs) {
  if ((!isArr(xs) && !isStr(xs)) || isEmpty(xs))
    throw new TypeError(
      "tail(): input must be a non-empty string or array."
    );

  return xs.slice(1);
}

export { tail };
