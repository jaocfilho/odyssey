import { describe, it, expect, vi, beforeEach } from 'vitest';

import { z } from 'zod';

import { useCustomForm } from '.';
import { renderHook } from '@testing-library/react-hooks';

describe('useCustomForm', () => {
  const schema = z.object({
    name: z.string().min(3),
    age: z.number().positive(),
  });

  const onSubmit = vi.fn();

  const initialValues = {
    name: 'John Doe',
    age: 30,
  };

  const { result, unmount } = renderHook(() =>
    useCustomForm<typeof schema>({
      schema,
      onSubmit,
      defaultValues: initialValues,
    })
  );

  beforeEach(() => {
    vi.resetAllMocks();
    unmount();
  });

  it('returns methods and customMethods', () => {
    expect(result.current.methods).toBeDefined();
    expect(result.current.customMethods).toBeDefined();
  });
});
