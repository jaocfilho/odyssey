import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useBaseInsertPersona } from '.';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseInsertPersona } from '../../api/base';
import { assertObjectProperties } from '@odyssey/tests';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseInsertPersona: vi.fn(),
}));

describe('useBaseInsertPersona', () => {
  const { result, unmount, rerender } = renderHook(() =>
    useBaseInsertPersona()
  );

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const expectedProperties = ['insertPersona'];

    assertObjectProperties(expectedProperties, result.current);
  });

  it('should call baseInsertPersona on insertPersona call', async () => {
    await result.current.insertPersona({ chatbot: '' });

    expect(baseInsertPersona).toHaveBeenCalled();
  });
});
