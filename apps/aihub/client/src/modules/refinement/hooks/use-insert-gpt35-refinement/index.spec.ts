import { beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { assertObjectProperties } from '@odyssey/tests';
import { useSupabase } from '@/lib/supabase/Provider';
import { useInsertGpt35Refinement } from '.';
import { baseInsertGpt35Refinement } from '../../api/base';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseInsertGpt35Refinement: vi.fn(),
}));

describe('useInsertGpt35Refinement', () => {
  const { result, unmount } = renderHook(() => useInsertGpt35Refinement());

  beforeEach(() => {
    unmount();
  });

  it('should call baseInsertGpt35Refinement on insertGpt35Refinement call', async () => {
    await result.current.insertGpt35Refinement({
      app: 'anyApp',
    });

    expect(baseInsertGpt35Refinement).toHaveBeenCalled();
  });

  it('should return the correct object', () => {
    const properties = ['insertGpt35Refinement'];

    assertObjectProperties(properties, result.current);
  });
});
