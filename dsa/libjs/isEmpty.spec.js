import { isEmpty } from './index.js';

describe('isEmpty()', () => {
  test('emtpy string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('emtpy array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  test('non-empty array', () => {
    expect(isEmpty([10, 20, -42]));
  });
});
