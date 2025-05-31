import { log } from '../utils';

/**
 * A class decorator takes the constructor function as the first param.
 */
function Logger(ctor: Function) {
  log('Logging...');
  log(ctor);
}

@Logger
class Person {
  name: string = 'Aayla';

  constructor() {
    log('Creating person');
  }
}

new Person();
