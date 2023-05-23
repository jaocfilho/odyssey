import { useState, useCallback } from 'react';

type UseBooleanStateOptions = {
  initialState?: boolean;
  onFalse?: () => void;
  onTrue?: () => void;
};

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
  options?: UseBooleanStateOptions
): UseBooleanStateReturn => {
  const initialState = options?.initialState ?? false;

  const [state, setState] = useState(initialState);

  const handleFalse = useCallback(() => {
    if (typeof options?.onFalse === 'function') {
      options.onFalse();
    }
    setState(false);
  }, [setState]);

  const handleTrue = useCallback(() => {
    if (typeof options?.onTrue === 'function') {
      options.onTrue();
    }
    setState(true);
  }, [setState]);

  return [state, handleFalse, handleTrue];
};
