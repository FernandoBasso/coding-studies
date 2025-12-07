// @ts-check

const log = console.log.bind(console);

/**
 * Returns the last non-whitespace char from s.
 *
 * NOTE: Only handles 0x20 " " whitespace (man ascii).
 *
 * @param {string} s A string of zero or more characters.
 * @returns {string | undefined} The the last non-whitespace char or undefined.
 */

function last(s) {
  for (let i = s.length - 1; i >= 0; --i)
    if (s[i] !== " ")
      return s[i];
}

log(last(""));
//=> undefined

log(last("   "));
//=> undefined


log(last("Yoda"));
//=> "a"

log(last("Yoda   "));
//=> "a";

