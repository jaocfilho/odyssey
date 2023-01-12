type CallMultipleTimesCallback = (index: number) => void;

/**
 * Calls a defined callback multiple times.
 *
 * @param callbackFn A function that accepts an number argument.
 * @param calls A number representing the number of calls.
 *
 */
export const callMultipleTimes = (
  callbackFn: CallMultipleTimesCallback,
  calls: number
) => {
  [...new Array(calls)].forEach((_, index) => callbackFn(index));
};
