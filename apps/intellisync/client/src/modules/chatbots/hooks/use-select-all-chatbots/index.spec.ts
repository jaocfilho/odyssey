import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { assertObjectProperties } from '@odyssey/tests';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseSelectAllChatbots } from '../../api/base';
import { useBaseSelectAllChatbots } from '.';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseSelectAllChatbots: vi.fn(),
}));

describe('useBaseSelectAllChatbots', () => {
  const { result, unmount, rerender } = renderHook(() =>
    useBaseSelectAllChatbots()
  );

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const expectedProperties = ['selectAllChatbots'];
    assertObjectProperties(expectedProperties, result.current);
  });

  it('should callback baseSelectAllChatbots on selectAllChatbots call', () => {
    result.current.selectAllChatbots({ organizationId: 'any' });
    expect(baseSelectAllChatbots).toHaveBeenCalledWith(
      {
        organizationId: 'any',
      },
      expect.any(Object)
    );
  });
});
