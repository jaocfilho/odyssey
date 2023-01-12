import { SimpleOrReadonlyArray } from '../types';

/**
 * Receives two arrays and returns an array containing only
 * the elements from the first array that are not included
 * on the second one.
 *
 * @param array An array.
 * @param excludedArray An array.
 *
 * @example
 * getArrayDifference([1,2,3], [2,3]); // [1]
 *
 */
export const getArrayDifference = <T>(
  array: SimpleOrReadonlyArray<T>,
  excludedArray: SimpleOrReadonlyArray<T>
): T[] => {
  const difference = array.filter((x) => !excludedArray.includes(x));

  return difference;
};
