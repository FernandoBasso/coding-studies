import { log } from '../utils';

// Decorator factory for a class.
function Logger(msg: string) {
  return function (ctor: Function) {
    log(msg);
    log(ctor);
  };
}

// The factory takes a param now.
@Logger('Defining class Person.')
class Person {
  name: string = 'Aayla';

  constructor() {
    log('Creating person');
  }
}

new Person();

/*

A decorator FACTORY returns a decorator function but allows us to
configure it when assigning it to a class (or method, property, etc.).

*/
