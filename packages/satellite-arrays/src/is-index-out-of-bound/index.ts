import { SimpleOrReadonlyArray } from '../types';

/**
 * Determines whether a given index is out of bounds of an array.
 *
 * @param arr - The array to check.
 * @param index - The index to check.
 * @returns `true` if the index is out of bounds, `false` otherwise.
 *
 * @example
 * const myArray = [1, 2, 3];
 *
 * console.log(isIndexOutOfBounds(myArray, 2)); // false
 * console.log(isIndexOutOfBounds(myArray, 3)); // true
 */
export const isIndexOutOfBounds = <TItem>(
  array: SimpleOrReadonlyArray<TItem>,
  index: number
): boolean => {
  return index < 0 || index >= array.length;
};
