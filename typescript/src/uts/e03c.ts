import { log } from '../utils';

function mkF(msg: string) {
  log('mkF');

  return function (_ctor: Function) {
    log(msg);
  };
}

function mkG(msg: string) {
  log('mkG');

  return function (_ctor: Function) {
    log(msg);
  }
}

@mkF('hello')
@mkG('world')
class Qux {};
//=> mkF 
//=> mkG 
//=> world
//=> hello

// new Qux();

/*

The factories themselves run in order they are added for the class.
First mkF then mkG as we can see for the log order of 'mkF' and 'mkG'.

But the decorators proper run from the closest to the class to the
farthest, as we can see for the order 'world' and 'hello' in the logs.

TL;DR:
- Factories execute top-down.
- Decorators themselves execute bottom-up.

Why do the decorators even run if we have an empty class that is not
even instantiated? Because decorators run when the class is defined,
unlike methods which run when we invoke those methods. Constructors
are also methods and their decorators when classes are instantiated.

*/
