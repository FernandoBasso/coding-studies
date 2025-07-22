import { getDigit } from './index.js';

describe('getDigit(num, pos)', () => {
  test('get zeroth digit', () => {
    expect(getDigit(0, 0)).toEqual(0);
    expect(getDigit(531, 0)).toEqual(1);
    expect(getDigit(-37, 0)).toEqual(7);
  });

  test('get first digit', () => {
    expect(getDigit(97, 1)).toEqual(9);
    expect(getDigit(-97, 1)).toEqual(9);
  });

  test('get second digit', () => {
    expect(getDigit(791, 2)).toEqual(7);
    expect(getDigit(-791, 2)).toEqual(7);
  });

  test('get ninth digit', () => {
    expect(getDigit(5041738269, 9)).toEqual(5)
    expect(getDigit(-5041738269, 9)).toEqual(5)
  });

  test('get unreachable digit', () => {
    expect(getDigit(123, 3)).toEqual(0);
    expect(getDigit(123, 5)).toEqual(0);
  });
});
