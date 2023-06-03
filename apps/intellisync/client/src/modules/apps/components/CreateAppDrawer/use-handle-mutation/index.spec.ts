import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { useBaseHandleMutation } from '.';

describe('useBaseHandleMutation', () => {
  const onMutate = vi.fn();

  const { result, unmount } = renderHook(() =>
    useBaseHandleMutation({ onMutate })
  );

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = [
      'addRefinementToParams',
      'addAppToParams',
      'handleMutation',
    ];
    assertObjectProperties(properties, result.current);
  });

  it('should call onMutate on handleMutation call', () => {
    result.current.handleMutation();
    expect(onMutate).toHaveBeenCalled();
  });
});
