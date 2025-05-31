/* eslint-disable no-unused-vars */
import { map } from 'ramda';
import { l, log, curry, pipe } from './helpers';


const prices = [23.9, 25.4999, 3, 5.31];

const format0 = function format (values) {
  const withPlaces = [];

  for (let i = 0; i < values.length; ++i) {
    withPlaces.push(values[i].toFixed(2));
  }

  const withComma = [];

  for (let i = 0; i < withPlaces.length; ++i) {
    withComma.push(withPlaces[i].replace('.', ','));
  }

  const brl = [];

  for (let i = 0; i < withComma.length; ++i) {
    brl.push('R$ ' + withComma[i]);
  }

  return brl;
}


l('format0:', format0(prices));

l('\n');





const toDecimals = curry((places, input) => input.toFixed(places));

const replace = curry((pattern, replacement, input) =>
  input.replace(pattern, replacement)
);

const toTwoDecimals = toDecimals(2);

const toCommas = replace('.', ',');

const toReal = input => `R$ ${input}`;



const format =
  pipe(
    // toDecimals(2),
    // replace('.', ','),
    toTwoDecimals,
    toCommas,
    toReal,
  );

const mapToMoney = map(format);

l('ultimateFormat:', mapToMoney(prices));

