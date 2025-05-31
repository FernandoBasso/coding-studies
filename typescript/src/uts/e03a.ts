import { log } from '../utils';

function Logger(msg: string) {
  return function (ctor: Function) {
    log(msg);
    log(ctor);
  };
}

function WithTempl(templ: string, domID: string) {
  return function (_: Function) {
    const elem = document.getElementById(domID);

    if (!elem) {
      log(`Element with ID ‘${domID}’ not found.`);
      return;
    };

    elem.innerHTML = templ;
  };
}

// Parenthesis now because Logger is a decorator factory.
@Logger('Defining class Person.')
@WithTempl('<h1>Hello, World!</h1>', 'app')
class Person {
  name: string = 'Aayla';

  constructor() {
    log('Creating person');
  }
}

new Person();

/*

A decorator FACTORY returns a decorator function but allows us to
configure it (through params) when assigning it to a class (or
method, property, etc.).
*/
