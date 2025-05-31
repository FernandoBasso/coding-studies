import { log } from '../utils';

/*
 * This is a decorator. A normal function :)
 * 
 * Decorators get passed a few params, which are not taking here, thus
 * the type errors.
 */
function Logger() {
  log('Logging...'); // <1>
}

// <2>
@Logger
class Person {
  name: string = 'Aayla';

  constructor() {
    log('Creating person.');
  }
}

new Person();

/*

<1> Runs when code is parsed.

<2> No parenthesis (this is not a decorator factory).

The class decorator is executed when the class is defined, not when
it is instantiated/constructed.

*/
