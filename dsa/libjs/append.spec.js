import { append } from './index.js';

describe('append()', () => {
  test('should append to the array', () => {
    expect(append(1, [])).toEqual([1]);
    expect(append('two', ['one'])).toEqual(['one', 'two']);
  });
});
