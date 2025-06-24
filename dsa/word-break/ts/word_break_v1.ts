function wordBreakR(
  str: string,
  idx: number,
  words: Array<string>,
): boolean {
  if (str.length === idx) return true;

  let prefix = "";

  for (let j = idx; j <= str.length; ++j) {
    prefix += str[j];

    if (words.includes(prefix) && wordBreakR(str, j + 1, words))
      return true;
  }

  return false;
}

export function wordBreak(str: string, words: Array<string>): boolean {
  return wordBreakR(str, 0, words);
}
