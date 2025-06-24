const log: Console["log"] = console.log.bind(console);

export function wordBreak(str: string, words: Array<string>): boolean {
  const n: number = str.length;
  let maxLen: number = 0;

  for (const word of words) {
    maxLen = Math.max(maxLen, word.length);
  }

  const memo: Array<boolean> = Array(n + 1).fill(false);
  memo[0] = true;

  for (let i = 1; i <= n; ++i) {
    for (let j = i - 1; j >= Math.max(0, i - maxLen); --j) {
      const seg: string = str.substring(j, i);
      if (memo[j] && words.includes(seg)) {
        memo[i] = true;
        break;
      }
    }
  }

  return memo[n];
}
