import { describe, expect, it } from 'vitest';

import { moveItem } from '.';

describe('moveItem', () => {
  it('should move an item from one index to another index', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const from = 1;
    const to = 3;
    const expectedArray = ['a', 'c', 'd', 'b', 'e'];

    const result = moveItem(array, from, to);

    expect(result).toEqual(expectedArray);
  });

  it('should handle moving an item to the same index', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const from = 2;
    const to = 2;
    const expectedArray = ['a', 'b', 'c', 'd', 'e'];

    const result = moveItem(array, from, to);

    expect(result).toEqual(expectedArray);
  });

  it('should handle moving the first item to the last index', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const from = 0;
    const to = array.length - 1;
    const expectedArray = ['b', 'c', 'd', 'e', 'a'];

    const result = moveItem(array, from, to);

    expect(result).toEqual(expectedArray);
  });

  it('should handle moving the last item to the first index', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const from = array.length - 1;
    const to = 0;
    const expectedArray = ['e', 'a', 'b', 'c', 'd'];

    const result = moveItem(array, from, to);

    expect(result).toEqual(expectedArray);
  });

  it('should handle moving an item in an array with one item', () => {
    const array = ['a'];
    const from = 0;
    const to = 0;
    const expectedArray = ['a'];

    const result = moveItem(array, from, to);

    expect(result).toEqual(expectedArray);
  });

  it('should throw an error if the "from" index is out of bounds', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const from = -1;
    const to = 2;

    expect(() => moveItem(array, from, to)).toThrow();
  });

  it('should throw an error if the "to" index is out of bounds', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const from = 2;
    const to = array.length;

    expect(() => moveItem(array, from, to)).toThrow();
  });

  it('should throw an error if the "from" and "to" indices are the same and out of bounds', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const from = -1;
    const to = array.length;

    expect(() => moveItem(array, from, to)).toThrow();
  });
});
