/* eslint-disable no-unused-vars */
import {l, log} from "./helpers"

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arr = '123456789'.split('');
// var res = [];
// for (let i = 0; i < arr.length; ++i) {
//   res.push(Number(arr[i]));
// }

// l(res);


// const nums = '123456789'.split('').map(Number);


function sumAll(list) {
  let result = 0

  for (let i = 0; i < list.length; ++i) {
    result += list[i];
  }

  return result;
}

function sumEven(list) {
  let result = 0

  for (let i = 0; i < list.length; ++i) {
    if (list[i] % 2 === 0) {
      result += list[i];
    }
  }

  return result;
}

function onlyOdds(list) {
  const odds = []

  for (let i = 0; i < list.length; ++i) {
    if (list[i] % 2 !== 0) {
      odds.push(list[i]);
    }
  }

  return odds;
}

l("all:", sumAll(nums));

l("even:", sumEven(nums));

const odds = onlyOdds(nums);

l("odd:", sumAll(odds));


