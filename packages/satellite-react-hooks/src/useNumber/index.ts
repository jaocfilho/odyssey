import { useCallback, useState } from 'react';

export type UseNumberProps = {
  initialValue?: number;
};

export type UseNumberReturn = {
  number: number;
  changeNumber: (newValue: number) => void;
  reset: () => void;
};

export type UseNumber = (props?: UseNumberProps) => UseNumberReturn;

export const useNumber: UseNumber = ({ initialValue = 0 } = {}) => {
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
