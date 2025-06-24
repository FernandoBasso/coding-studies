import { log, len } from "../../libts";

function wordBreakR(
  str: string,
  idx: number,
  words: Array<string>,
): boolean {
  if (len(str) === idx) return true;

  const n = len(str);
  let prefix = "";

  for (let j = idx; j <= n; ++j) {
    prefix += str[j];

    if (words.includes(prefix) && wordBreakR(str, j + 1, words))
      return true;
  }

  return false;
}

export function wordBreak(str: string, words: Array<string>): boolean {
  return wordBreakR(str, 0, words);
}
