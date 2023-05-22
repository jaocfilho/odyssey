import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { assertObjectProperties } from '@odyssey/tests';
import { useSelected } from '.';

describe('useSelected', () => {
  const onChange = vi.fn();

  const { result, unmount, rerender } = renderHook(() =>
    useSelected({ onChange })
  );

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['selected', 'handleChange'];

    assertObjectProperties(properties, result.current);
  });

  it('should update the selected item on handleChange call', () => {
    const newSelected = { label: 'anyLabel', value: 'anyValue' };
    result.current.handleChange(newSelected);

    expect(result.current.selected?.label).toEqual(newSelected.label);
    expect(result.current.selected?.value).toEqual(newSelected.value);
  });

  it('should callback onChange on handleChange call', () => {
    const newSelected = { label: 'anyLabel', value: 'anyValue' };
    result.current.handleChange(newSelected);

    expect(onChange).toHaveBeenCalledWith(newSelected);
  });
});
