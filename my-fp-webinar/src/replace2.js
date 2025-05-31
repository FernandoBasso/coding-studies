/* eslint-disable no-unused-vars */
import { l, log, upper, curry } from "./helpers";

function substitute(pattern, replacement, str) {
  return str.replace(pattern, replacement);
}

log("subst h3ll0 w0lrd", substitute(/\d/g, "-", "h3ll0 w0rld"));

//
// `replace` is curried and can be partially-applied.
//
const replace = curry(substitute);

//
// `replaceFirsts` is `replace` with the first argument
// “pre-configured”. The remaining arguments are still
// curried.
//
const replaceFirsts = replace(/\b\w/g);

log(
  "replaceFirsts",
  replaceFirsts(upper, "albus percival wulfric brian dubledore")
);

const capitalize = replaceFirsts(upper);

// const capitalize = replace(/\b\w/g, upper);

log("capitalize:", capitalize("obi-wan kenobi"));

const underfy = replace(/ /g, "_");

log("underfy", underfy("Half Life Chapter 3 Unforeseen Consequences"));
