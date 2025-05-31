import { log } from './utils';

function Log() {
  return function LogDecorator(
    target: any,
    key: string,
    descr?: PropertyDescriptor,
  ) {
    log(`Log() decorator run for key ‘${key}’.`);
    return target[key];
  }
}

class Jedi {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Log()
  getName() {
    return this.name;
  }
}

const jedi = new Jedi('Ahsoka Tano');
const jediName = jedi.getName();
log(jediName);
