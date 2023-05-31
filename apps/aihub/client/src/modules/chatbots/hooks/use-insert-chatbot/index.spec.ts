import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useBaseInsertChatbot } from '.';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseInsertChatbot } from '../../api/base';
import { assertObjectProperties } from '@odyssey/tests';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseInsertChatbot: vi.fn(),
}));

describe('useBaseInsertChatbot', () => {
  const { result, unmount, rerender } = renderHook(() =>
    useBaseInsertChatbot()
  );

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const expectedProperties = ['insertChatbot'];

    assertObjectProperties(expectedProperties, result.current);
  });

  it('should call baseInsertChatbot on insertChatbot call', async () => {
    await result.current.insertChatbot({ name: 'anyName' });

    expect(baseInsertChatbot).toHaveBeenCalled();
  });
});
