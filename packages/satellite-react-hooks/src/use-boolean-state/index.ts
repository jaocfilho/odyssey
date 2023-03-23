import { useState, useCallback } from 'react';

type UseBooleanStateReturn = [
  state: boolean,
  handleFalse: () => void,
  handleTrue: () => void
];

/**
 * Returns a stateful boolean value, a function to change it
 * to false and a function to change it to true.
 *
 * @param initialState defaults to false.
 *
 * @returns `[state, handleFalse, handleTrue]`
 */
export const useBooleanState = (
  initialState: boolean = false
): UseBooleanStateReturn => {
  const [state, setState] = useState(initialState);

  const handleFalse = useCallback(() => {
    setState(false);
  }, [setState]);

  const handleTrue = useCallback(() => {
    setState(true);
  }, [setState]);

  return [state, handleFalse, handleTrue];
};
