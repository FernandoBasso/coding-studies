import { isNil } from './index.js';

describe('isNil()', () => {
  test('undefined', () => {
    expect(isNil(undefined)).toBe(true);
  });

  test('null', () => {
    expect(isNil(null)).toBe(true);
  });

  test('empty string', () => {
    expect(isNil('')).toBe(false);
  });

  test('empty array', () => {
    expect(isNil([])).toBe(false);
  });

  test('empty string', () => {
    expect(isNil({})).toBe(false);
  });
});
