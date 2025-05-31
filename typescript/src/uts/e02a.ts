import { log } from '../utils';

// Decorator factory for a class.
function Logger() {
  return function(ctor: Function) {
    log('Logging...');
    log(ctor);
  };
}

// Parenthesis now because Logger is a decorator factory.
@Logger()
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
