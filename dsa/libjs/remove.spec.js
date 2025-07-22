import { remove } from './remove.js';

//
// Think of “tests” like this:
//
// • design tool
// • documentation
// • testing
// • regression testing
//

describe('remove(x, xs)', () => {
  test('empty arrays', () => {
    expect(remove(3, [])).toEqual([]);

    expect(remove("ha", [])).toEqual([]);
  });

  test('element not found', () => {
    expect(remove(3, [1, 2, 4, 5])).toEqual([1, 2, 4, 5]);

    expect(
      remove("ha", ["hey", "hu", "funny"])
    ).toEqual(["hey", "hu", "funny"]);
  });

  test('element occurs a single time', () => {
    expect(remove(3, [1, 2, 3, 4, 5])).toEqual([1, 2, 4, 5]);

    expect(
      remove("ha", ["hey", "hu", "ha", "funny"])
    ).toEqual(["hey", "hu", "funny"]);
  });

  test('element occurs multiple times', () => {
    expect(remove(3, [1, 2, 3, 3, 4, 3, 5])).toEqual([1, 2, 3, 4, 3, 5]);

    expect(
      remove("ha", ["hey", "hu", "ha", "ha", "funny", "ha"])
    ).toEqual(["hey", "hu", "ha", "funny", "ha"]);
  });
});
