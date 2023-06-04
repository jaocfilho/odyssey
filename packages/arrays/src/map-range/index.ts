import type { SimpleOrReadonlyArray } from '../types';

type MapRangeCallback<T> = (index: number) => T;

/**
 * Calls a defined callback over a range from 0 to the given range,
 * and returns an array that contains the results.
 *
 * @param callbackFn A function that accepts an number argument.The map method calls the callbackfn function one time for each element in the array.
 * @param range A number representing the size of the array.
 *
 */
export const mapRange = <T>(
  callbackFn: MapRangeCallback<T>,
  range: number
): SimpleOrReadonlyArray<T> => {
  return [...new Array(range)].map((_, index) => callbackFn(index));
};
