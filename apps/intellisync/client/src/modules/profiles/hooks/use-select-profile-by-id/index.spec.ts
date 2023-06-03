import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { assertObjectProperties } from '@odyssey/tests';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseSelectProfileById } from '../../api/base';
import { useBaseSelectProfileById } from '.';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseSelectProfileById: vi.fn(),
}));

describe('useBaseSelectProfileById', () => {
  const { result, unmount, rerender } = renderHook(() =>
    useBaseSelectProfileById()
  );

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const expectedProperties = ['selectProfileById'];
    assertObjectProperties(expectedProperties, result.current);
  });

  it('should callback baseSelectProfileById on selectProfileById call', () => {
    result.current.selectProfileById({ id: 'any' });
    expect(baseSelectProfileById).toHaveBeenCalled();
  });
});
