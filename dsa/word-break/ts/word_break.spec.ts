import { wordBreak } from "./word_break";

describe("wordBreak()", () => {
  it("simple case 1", () => {
    expect(wordBreak("ilikedsa", ["i", "like", "dsa"])).toBe(true);
  });

  it("simple case 2", () => {
    expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
  });

  it("not found", () => {
    expect(
      wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]),
    ).toBe(false);
  });

  it("expensive input", () => {
    expect(
      wordBreak(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
        [
          "a",
          "aa",
          "aaa",
          "aaaa",
          "aaaaa",
          "aaaaaa",
          "aaaaaaa",
          "aaaaaaaa",
          "aaaaaaaaa",
          "aaaaaaaaaa",
        ],
      ),
    ).toBe(true);
  });
});
