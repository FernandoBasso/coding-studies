/* eslint-disable no-unused-vars */
import { l, log, pipe } from './helpers';

import { filter, reduce } from 'ramda';

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = num => num % 2 === 0;
const isOdd = num => num % 2 !== 0;

const sum = (x, y) => x + y;


l('all:', nums.reduce(sum, 0));

l('even:', nums.filter(isEven).reduce(sum, 0));

l('odd:', nums.filter(isOdd).reduce(sum, 0));

// method chaining

l('\n');

const pares = filter(isEven, nums);
const result = reduce(sum, pares);

const sumAll = reduce(sum, 0);
const sumEven = pipe(filter(isEven), reduce(sum, 0));
const sumOdd = pipe(filter(isOdd), reduce(sum, 0));

l('sumAll', sumAll(nums));
l('sumEven', sumEven(nums));
l('sumOdd', sumOdd(nums));

