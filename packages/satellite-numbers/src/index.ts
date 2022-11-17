type InRangeOptions = {
  /**
   * Determines if min and max values are included on the
   * assertion.
   *
   * @defaultValue true.
   */
  includeLimits?: boolean;
};

type InRangeParams = {
  targetNumber: number;
  min: number;
  max: number;
  options?: InRangeOptions;
};

/**
 * Asserts that a numbers belongs to a given range of numbers.
 *
 * Receives the target, the minimum and the maximum numbers.
 * It returns a boolean showing whether or not the target number belongs
 * to the range.
 *
 * Both minimum and maximum values are included on the assertion.
 * But you can change this behavior by setting `includeLimits`
 * option to false.
 *
 */
export const inRange = ({
  targetNumber,
  min,
  max,
  options = { includeLimits: true },
}: InRangeParams) => {
  if (!options.includeLimits) {
    return targetNumber > min && targetNumber < max;
  }

  return targetNumber >= min && targetNumber <= max;
};

/**
 * Receives a min and a max numbers and returns a random
 * integer between both.
 * 
 * @param min An integer
 * @param max An integer
 * 
 * TODO complete documentation
 */
export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
