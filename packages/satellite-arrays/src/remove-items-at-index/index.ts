import { SimpleOrReadonlyArray } from '../types';

/**
 * Removes an item at a specified index in an array, returning a new array.
 *
 * @template TItem The type of item in the array.
 * @param {TItem[] | ReadonlyArray<TItem>} array The array to remove the item from.
 * @param {number} index The index of the item to remove.
 * @returns {TItem[]} A new array with the item removed at the specified index.
 *
 * @example
 * Remove the first item from an array
 * const result = removeItemAtIndex([1, 2, 3], 0); // [2, 3]
 *
 * @example
 * Remove an item in the middle of an array
 * const result = removeItemAtIndex([1, 2, 3, 4], 2); // [1, 2, 4]
 *
 * @example
 * Remove the last item from an array
 * const result = removeItemAtIndex([1, 2, 3], 2); // [1, 2]
 */
export const removeItemAtIndex = <TItem>(
  array: SimpleOrReadonlyArray<TItem>,
  index: number
) => {
  // TODO tests
  return [...array.slice(0, index), ...array.slice(index + 1)];
};
