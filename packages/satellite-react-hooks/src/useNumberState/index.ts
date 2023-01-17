import { useCallback, useState } from 'react';

export type UseNumberStateProps = {
  initialValue?: number;
};

export type UseNumberStateReturn = {
  number: number;
  changeNumber: (newValue: number) => void;
  reset: () => void;
};

export type UseNumberState = (
  props?: UseNumberStateProps
) => UseNumberStateReturn;

/**
 * A hook that controls a number state
 *
 * @param initialValue - Initial value of the state. It defaults to 0.
 *
 * @return number - current value of the state
 * @return changeNumber - a function that sets the new value of the state
 * @return reset - a function that resets the value of the state to the initial value
 *
 * @example
 *
 * const { number, changeNumber, reset } = useNumberState({initialValue: 0});
 *
 */
export const useNumberState: UseNumberState = ({ initialValue = 0 } = {}) => {
  const [number, setNumber] = useState(initialValue);

  const changeNumber = useCallback(
    (newValue: number) => setNumber(newValue),
    [setNumber]
  );

  const reset = useCallback(
    () => setNumber(initialValue),
    [initialValue, setNumber]
  );

  return { number, changeNumber, reset };
};
