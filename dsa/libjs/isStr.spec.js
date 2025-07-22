import { isStr } from './index.js';

describe('isStr()', () => {
  test('empty string', () => {
    expect(isStr('')).toBe(true);
    expect(isStr(new String('')));
  });

  test('non empty string', () => {
    expect(isStr('💩')).toBe(true);
    expect(isStr('Check ✔️')).toBe(true);
  });

  test('non-string values', () => {
    expect(isStr(/grep/g)).toBe(false);
    expect(isStr({ id: 1, name: 'Yoda' })).toBe(false);
  });
});
