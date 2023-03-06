import { SimpleOrReadonlyArray } from '../types';

/**
 * Inserts an item at a specified index in an array, returning a new array.
 *
 * @template TItem The type of item to insert.
 * @param {TItem[] | ReadonlyArray<TItem>} array The array to insert the item into.
 * @param {TItem} item The item to insert into the array.
 * @param {number} index The index at which to insert the item.
 * @returns {TItem[]} A new array with the item inserted at the specified index.
 *
 * @example
 * Insert an item at the beginning of an array
 * const result = insertItemAtIndex([2, 3, 4], 1, 0); // [1, 2, 3, 4]
 *
 * @example
 * Insert an item in the middle of an array
 * const result = insertItemAtIndex([1, 2, 4], 3, 2); // [1, 2, 3, 4]
 *
 * @example
 * Insert an item at the end of an array
 * const result = insertItemAtIndex([1, 2, 3], 4, 3); // [1, 2, 3, 4]
 */

export const insertItemAtIndex = <TItem>(
  array: SimpleOrReadonlyArray<TItem>,
  item: TItem,
  index: number
) => {
  // TODO tests
  return [...array.slice(0, index), item, ...array.slice(index)];
};
