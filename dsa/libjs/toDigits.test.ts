import { toDigits } from './index.js';

Deno.test('toDigits()', async (t) => {
  await t.step('should return the single digit in an array', () => {
    expect(toDigits(0)).toEqual([0]);
    expect(toDigits(-0)).toEqual([0]);
    expect(toDigits(-1)).toEqual([1]);
    expect(toDigits(9)).toEqual([9]);
    expect(toDigits(-9e0)).toEqual([9]);
  });

  await t.step('should return the two digits in an array', () => {
    expect(toDigits(10)).toEqual([1, 0]);
    expect(toDigits(-11)).toEqual([1, 1]);
    expect(toDigits(42)).toEqual([4, 2]);
    expect(toDigits(-99)).toEqual([9, 9]);
  });

  await t.step('should return the three digits in an array', () => {
    expect(toDigits(100)).toEqual([1, 0, 0]);
    expect(toDigits(-1e2)).toEqual([1, 0, 0]);
    expect(toDigits(111)).toEqual([1, 1, 1]);
    expect(toDigits(-947)).toEqual([9, 4, 7 ]);
    expect(toDigits(999)).toEqual([9, 9, 9]);
  });

  await t.step('should return the four digits in an array', () => {
    expect(toDigits(-1000)).toEqual([1, 0, 0, 0]);
    expect(toDigits(1e3)).toEqual([1, 0, 0, 0]);
    expect(toDigits(1111)).toEqual([1, 1, 1, 1]);
    expect(toDigits(9473)).toEqual([9, 4, 7, 3]);
    expect(toDigits(-9999)).toEqual([9, 9, 9, 9]);
  });

  await t.step('should return the digits for other lengths', () => {
    expect(toDigits(9e5)).toEqual([9, 0, 0, 0, 0, 0]);
    expect(toDigits(-9e5)).toEqual([9, 0, 0, 0, 0, 0]);
    expect(toDigits(9876543210)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    expect(toDigits(-9876543210)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });
});
