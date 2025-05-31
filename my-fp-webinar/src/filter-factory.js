/* eslint-disable no-unused-vars */
import { l, log } from './helpers';

/**
 * Creates a speciallized filter function.
 * 
 * @param {string} which - which filter to apply
 * @return {function} - the filter function.
 */
function makeFilterFn(which) {
  return which === 'even' ?
    x => x % 2 === 0 :
    x => x % 2 !== 0;
}

const isEven = makeFilterFn('even');
const isOdd = makeFilterFn('odd');

l('even', [1, 2, 3, 4, 5].filter(isEven));

l('odd', [1, 2, 3, 4, 5].filter(isOdd));
