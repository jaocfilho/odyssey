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
