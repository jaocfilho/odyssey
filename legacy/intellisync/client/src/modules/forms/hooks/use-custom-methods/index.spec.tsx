import { beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useForm } from 'react-hook-form';

import { useCustomMethods } from '.';
import { assertObjectProperties } from '@odyssey/tests';

describe('useCustomMethods', () => {
  const onSubmit = vi.fn();
  const initialValues = { name: 'John Doe', age: 30 };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should return the correct object', () => {
    const { result } = renderHook(() => {
      const methods = useForm();
      return useCustomMethods({ methods, onSubmit });
    });

    const properties = ['submitForm', 'resetToDefaultValues'];
    assertObjectProperties(properties, result.current.customMethods);
  });

  it('calls the onSubmit callback when submitForm is called', async () => {
    const { result } = renderHook(() => {
      const methods = useForm({ defaultValues: initialValues });
      return useCustomMethods({ methods, onSubmit });
    });

    await result.current.customMethods.submitForm();

    expect(onSubmit).toHaveBeenCalledWith(initialValues);
  });

  it('calls the reset callback when resetToDefaultValues is called', () => {
    const handleSubmitMock = vi.fn();
    const resetMock = vi.fn();

    const methods = { reset: resetMock, handleSubmit: handleSubmitMock };

    const { result } = renderHook(() => {
      return useCustomMethods({
        // @ts-ignore
        methods,
        defaultValues: initialValues,
      });
    });

    result.current.customMethods.resetToDefaultValues();
    expect(resetMock).toHaveBeenCalledWith(initialValues);
  });
});
