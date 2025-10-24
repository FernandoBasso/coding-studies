import { isNil } from "./nullable";

describe("isNil()", () => {
  const cases: Array<[description: string, input: unknown, expected: boolean]> = [
    ["undefined", undefined, true],
    ["null", null, true],
    ["zero", 0, false],
    ["empty string", "", false],
    ["false boolean", false, false],
    ["object", {}, false],
    ["array", [], false],
    ["function", () => { }, false],
    ["NaN", NaN, false],
    ["BigInt", BigInt(0), false],
    ["Symbol", Symbol("sym"), false],
    ["Inifnity", Infinity, false],
    ["negative Inifnity", -Infinity, false],
    ["Date", new Date(), false],
    ["RegExp", /test/, false],
  ];

  it.each(cases)("%s", (_, input, expected) => {
    expect(isNil(input)).toBe(expected);
  });
});
