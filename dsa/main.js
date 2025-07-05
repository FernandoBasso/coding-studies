const log = console.log.bind(console);

(function f(b) {
  f(b);
}(1));

// (function f() {
// while (0) {
//   log(new Date().getTime());
// }
// }());
//
// (function g() {
//   do {
//     log(new Date().getTime());
//   } while (0);
// }());
