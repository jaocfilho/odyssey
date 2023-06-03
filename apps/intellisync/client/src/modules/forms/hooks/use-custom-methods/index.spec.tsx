import { beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useForm } from 'react-hook-form';

import { useCustomMethods } from '.';

describe('useCustomMethods', () => {
  const onSubmit = vi.fn();
  const initialValues = { name: 'John Doe', age: 30 };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('returns customMethods object', () => {
    const { result } = renderHook(() => {
      const methods = useForm();
      return useCustomMethods({ methods, onSubmit });
    });

    expect(result.current.customMethods).toBeDefined();
  });

  it('calls the onSubmit callback when submitForm is called', async () => {
    const { result } = renderHook(() => {
      const methods = useForm({ defaultValues: initialValues });
      return useCustomMethods({ methods, onSubmit });
    });

    await result.current.customMethods.submitForm();

    expect(onSubmit).toHaveBeenCalledWith(initialValues);
  });
});
