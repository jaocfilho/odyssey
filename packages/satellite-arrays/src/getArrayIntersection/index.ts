import { SimpleOrReadonlyArray } from '../types';

/**
 * Receives two arrays and return an array containing the
 * intersection between both.
 * 
 * @param array1 An array.
 * @param array2 An array.
 * 
 * @example
 * getArrayIntersection([1,2,3], [2,3]); // [2, 3]

 */
export const getArrayIntersection = <T>(
  array1: SimpleOrReadonlyArray<T>,
  array2: SimpleOrReadonlyArray<T>
): T[] => {
  const intersection = array1.filter((x) => array2.includes(x));

  return intersection;
};
