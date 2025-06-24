import { wordBreak } from "./word_break_v1";

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

  ////
  // Takes forever if the solution doesn't use a good
  // dynamic programming approach for optimization.
  //
  it("false expensive input", () => {
    expect(
      wordBreak(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
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
    ).toBe(false);
  });

  ////
  // Takes forever if the solution doesn't use a good
  // dynamic programming approach for optimization.
  //
  it("true expensive input", () => {
    expect(
      wordBreak(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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
