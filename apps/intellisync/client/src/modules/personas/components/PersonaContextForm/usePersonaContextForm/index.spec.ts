import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { usePersonaContextForm } from '.';
import { assertObjectProperties } from '@odyssey/tests';

describe('usePersonaContextForm', () => {
  const onSubmit = vi.fn();

  const { result, unmount, rerender } = renderHook(
    (props) => usePersonaContextForm(props),
    {
      initialProps: {
        onSubmit,
      },
    }
  );

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = [
      'addRow',
      'removeRow',
      'register',
      'fields',
      'submit',
      'formState',
      'resetForm',
    ];
    assertObjectProperties(properties, result.current);
  });

  it('should have a single field if no default values are provided', () => {
    expect(result.current.fields).toHaveLength(1);
  });

  it('should add a new field when addRow is called', () => {
    result.current.addRow();
    expect(result.current.fields).toHaveLength(2);
  });

  it('should remove a field when removeRow is called', () => {
    result.current.removeRow(0);

    expect(result.current.fields).toHaveLength(0);
  });

  it('should reset the form when resetForm is called', () => {
    result.current.addRow();
    result.current.addRow();
    result.current.addRow();

    expect(result.current.fields).toHaveLength(4);

    result.current.resetForm();

    expect(result.current.fields).toHaveLength(1);
  });

  it('should has the correct default values', () => {
    const { result } = renderHook(() =>
      usePersonaContextForm({
        defaultValues: {
          context: [{ value: 'test' }],
        },
        onSubmit,
      })
    );

    expect(result.current.fields).toHaveLength(1);
    expect(result.current.fields[0].value).toBe('test');
  });

  it('should pass an array of strings to onSubmit when submit is called', async () => {
    const { result } = renderHook(() =>
      usePersonaContextForm({
        defaultValues: {
          context: [{ value: 'test' }],
        },
        onSubmit,
      })
    );

    await result.current.submit();
    expect(onSubmit).toHaveBeenCalledWith(['test']);
  });
});
