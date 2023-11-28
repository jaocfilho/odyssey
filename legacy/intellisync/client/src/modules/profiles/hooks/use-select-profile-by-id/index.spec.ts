import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectProfileById,
  type BaseSelectProfileByIdParams,
} from '../../api/base';
import { useBaseSelectProfileById } from '.';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({
    supabase: {},
  })),
}));

vi.mock('../../api/base', () => ({
  baseSelectProfileById: vi.fn(),
}));

describe('useBaseSelectProfileById', () => {
  const { result, rerender, unmount } = renderHook(() =>
    useBaseSelectProfileById()
  );

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['selectProfileById'];
    assertObjectProperties(properties, result.current);
  });

  it('should call baseSelectProfileById with the correct params', () => {
    const { supabase } = useSupabase();
    const { selectProfileById } = result.current;

    const params: BaseSelectProfileByIdParams = {
      id: '1',
    };
    selectProfileById(params);

    expect(baseSelectProfileById).toHaveBeenCalledWith(params, supabase);
  });
});
