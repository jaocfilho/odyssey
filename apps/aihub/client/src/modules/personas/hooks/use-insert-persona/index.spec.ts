import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useInsertPersona } from '.';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseInsertPersona } from '../../api/base';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseInsertPersona: vi.fn(),
}));

describe('useInsertPersona', () => {
  const { result } = renderHook(() => useInsertPersona());

  it('should call baseInsertPersona on insertPersona call', async () => {
    await result.current.insertPersona({});

    expect(baseInsertPersona).toHaveBeenCalled();
  });
});
