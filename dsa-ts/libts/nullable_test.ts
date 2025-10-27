import { assertEquals } from "@std/assert";
import { isNil } from "./nullable.ts";

Deno.test("isNil()", async (t) => {
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

  for (const [description, input, expected] of cases) {
    await t.step(description, () => {
      assertEquals(isNil(input), expected);
    });
  }
});

Deno.test("isNull() type guard", () => {
  // Type tests - these will be checked at compile time
  // The function should return a boolean for any input
  const _undefinedResult: boolean = isNil(undefined);
  const _objectResult: boolean = isNil({});
  // If the code compiles, the type guard is working correctly
});
