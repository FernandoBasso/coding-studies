/* eslint-disable no-unused-vars */
import {l, log, upper} from './helpers'

// substitute :: regex -> string|function -> string -> string
function substitute(pattern, replacement, input) {
  return input.replace(pattern, replacement);
}


log(
  'substitute',
  substitute(/force/, '_source_', 'May the force be with you!')
);


const substSpaces = substitute.bind(null, /\s/g);

log('substSpaces "-"', substSpaces('-', 'Half Life II'));


const substFirsts = substitute.bind(null, /\b\w/g);

log(
  'substFirsts toUpper',
  substFirsts(upper, 'albus percival wulfric brian dumbledore')
);


const capitalize = substitute.bind(null, /\b\w/g, upper);


log(
  'capitalize',
  capitalize('albus percival wulfric brian dumbledore')
);


