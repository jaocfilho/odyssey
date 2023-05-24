import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { assertObjectProperties } from '@odyssey/tests';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseSelectAllPersonas } from '../../api/base';
import { useBaseSelectAllPersonas } from '.';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseSelectAllPersonas: vi.fn(),
}));

describe('useBaseSelectAllPersonas', () => {
  const { result, unmount, rerender } = renderHook(() =>
    useBaseSelectAllPersonas()
  );

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const expectedProperties = ['selectAllPersonas'];
    assertObjectProperties(expectedProperties, result.current);
  });

  it('should callback baseSelectAllPersonas on selectAllPersonas call', () => {
    result.current.selectAllPersonas();
    expect(baseSelectAllPersonas).toHaveBeenCalled();
  });
});
