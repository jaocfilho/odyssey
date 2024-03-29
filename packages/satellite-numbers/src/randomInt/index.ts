/**
 * Returns a random integer between min (inclusive)
 * and max (inclusive).
 *
 * The value is no lower than min
 * (or the next integer greater than min if min isn't an integer)
 * and no greater than max
 * (or the next integer lower than max if max isn't an integer).
 *
 * @param min An integer
 * @param max An integer
 *
 */
export const randomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
