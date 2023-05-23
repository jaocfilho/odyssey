import { renderHook } from '@testing-library/react-hooks';

import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';

import { useBooleanState } from '.';

describe('useBooleanState', () => {
  it('should return 3n-tuple', () => {
    const { result } = renderHook(() => useBooleanState());

    expect(result.current).toBeInstanceOf(Array);
    expect(result.current).toHaveLength(3);
  });

  it('should have a boolean on first item', () => {
    const { result } = renderHook(() => useBooleanState());
    const state = result.current[0];

    expect(typeof state === 'boolean').toBeTruthy();
  });

  it('should have a function on the second item', () => {
    const { result } = renderHook(() => useBooleanState());
    const handleFalse = result.current[1];

    expect(handleFalse).toBeInstanceOf(Function);
  });

  it('should have a function on the third item', () => {
    const { result } = renderHook(() => useBooleanState());
    const handleTrue = result.current[2];

    expect(handleTrue).toBeInstanceOf(Function);
  });

  it('should have initialState === false as default', () => {
    const { result } = renderHook(() => useBooleanState());
    const state = result.current[0];

    expect(state).toBe<boolean>(false);
  });

  it('should have initialState === true when param is given', () => {
    const { result } = renderHook(() =>
      useBooleanState({ initialState: true })
    );
    const state = result.current[0];

    expect(state).toBe<boolean>(true);
  });

  it('should change state to `true` when `handleTrue` is called', () => {
    const { result } = renderHook(() => useBooleanState());
    const handleTrue = result.current[2];

    handleTrue();

    expect(result.current[0]).toBe<boolean>(true);
  });

  it('should change state to `false` when `handleFalse` is called', () => {
    const { result } = renderHook(() =>
      useBooleanState({ initialState: true })
    );
    const handleFalse = result.current[1];

    expect(result.current[0]).toBe<boolean>(true);

    handleFalse();

    expect(result.current[0]).toBe<boolean>(false);
  });

  it('should callback onFalse when handleFalse is called', () => {
    const onFalse = vi.fn();
    const { result } = renderHook(() => useBooleanState({ onFalse }));
    const handleFalse = result.current[1];

    handleFalse();

    expect(onFalse).toHaveBeenCalled();
  });

  it('should callback onTrue when handleFalse is called', () => {
    const onTrue = vi.fn();
    const { result } = renderHook(() => useBooleanState({ onTrue }));
    const handleTrue = result.current[2];

    handleTrue();

    expect(onTrue).toHaveBeenCalled();
  });
});
