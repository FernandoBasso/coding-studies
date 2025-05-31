import { log } from '../utils';

const logger = (msg: unknown) => log(msg);

function logWithDate(logFn: (a: string) => void) {
  return function (msg: string) {
    log(new Date().toString());
    logFn.call(null, msg);
  }
}

const myLogger = logWithDate(logger);

myLogger('IT FUCKING WORKS!');

/*

We have a logger function.

Then we wrap that function enhance, or endow that function
with dates on the logs. This is a form of decorating a function.
Therefore, logWithDate is a decorator for logger.

*/
