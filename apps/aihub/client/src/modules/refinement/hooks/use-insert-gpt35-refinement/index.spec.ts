import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useInsertGpt35Refinement } from '.';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseInsertGpt35Refinement } from '../../api/base';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseInsertGpt35Refinement: vi.fn(),
}));

describe('useInsertGpt35Refinement', () => {
  const { result } = renderHook(() => useInsertGpt35Refinement());

  it('should call baseInsertGpt35Refinement on insertGpt35Refinement call', async () => {
    await result.current.insertGpt35Refinement({
      app: 'anyApp',
    });

    expect(baseInsertGpt35Refinement).toHaveBeenCalled();
  });
});
