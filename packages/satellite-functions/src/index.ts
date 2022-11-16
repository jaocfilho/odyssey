type CallMultipleTImesCallback = (index: number) => void;

/**
 * Run a given callback multiple times.
 *
 * @param callback The callback to be called on each iteration.
 * @param calls The number of calls.
 *
 */
export const callMultipleTimes = (
  callback: CallMultipleTImesCallback,
  calls: number
) => {
  [...new Array(calls)].forEach((_, index) => callback(index));
};
