import { calc, toCents } from "./fx-rate";

describe("calc()", () => {
  it("converts from USD to MXN", () => {
    expect(
      calc(toCents(100), toCents(19.9))
    ).toEqual(toCents(1990));
  });

  // it("converts back from MXN to USD", () => {
  //   expect(
  //     calc(toCents(1990), toCents(1 / fxrate))
  //   ).toEqual(toCents(100));
  // });
});
