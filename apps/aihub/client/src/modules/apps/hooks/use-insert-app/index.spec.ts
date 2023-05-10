import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useInsertApp } from '.';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseInsertApp } from '../../api/base';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseInsertApp: vi.fn(),
}));

describe('useInsertApp', () => {
  const { result } = renderHook(() => useInsertApp());

  it('should call baseInsertApp on insertApp call', async () => {
    await result.current.insertApp({
      name: 'anyName',
      model: 'anyModel',
      description: 'anyDescription',
    });

    expect(baseInsertApp).toHaveBeenCalled();
  });
});
