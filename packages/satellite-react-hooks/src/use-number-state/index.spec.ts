import { act, renderHook } from '@testing-library/react-hooks';

import { beforeEach, describe, expect, it, assertType } from 'vitest';

import { useNumberState, UseNumberStateProps, UseNumberStateReturn } from '.';

describe('useNumberState', () => {
  const { result, rerender } = renderHook((props: UseNumberStateProps) =>
    useNumberState(props)
  );

  beforeEach(() => {
    // reset beforeEach test
    rerender();
  });

  it('should return an object', () => {
    assertType<UseNumberStateReturn>(result.current);
  });

  it('should return a number property with 0 as value', () => {
    const { number } = result.current;
    expect(number).toBe(0);
  });

  it('should return a changeNumber function', () => {
    const { changeNumber } = result.current;
    expect(typeof changeNumber).toBe('function');
  });

  it('should return the initialValue when its passed', async () => {
    const { result } = renderHook(() => useNumberState({ initialValue: 10 }));

    const { number } = result.current;

    expect(number).toBe(10);
  });

  it('should change the number when changeNumber is called', () => {
    act(() => {
      result.current.changeNumber(10);
    });

    expect(result.current.number).toBe(10);
  });

  it('should change the number back to its initial state when reset is called', () => {
    act(() => {
      result.current.changeNumber(10);
      result.current.reset();
    });

    expect(result.current.number).toBe(0);
  });
});
