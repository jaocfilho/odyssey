import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { assertObjectProperties } from '@odyssey/tests';
import { handleSettled, useBaseDeleteChatbotById } from '.';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseDeleteChatbotById } from '../../api/base';
import { invalidateAllChatbotsQuery } from '../../query-keys';

describe('useBaseDeleteChatbotById', () => {
  vi.mock('@/lib/supabase/Provider', () => ({
    useSupabase: vi.fn(() => ({ supabase: {} })),
  }));

  vi.mock('../../api/base', () => ({
    baseDeleteChatbotById: vi.fn(),
  }));

  const { result, unmount, rerender } = renderHook(() =>
    useBaseDeleteChatbotById()
  );

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const expectedProperties = ['deleteChatbotById'];

    assertObjectProperties(expectedProperties, result.current);
  });

  it('should call baseInsertChatbot on insertChatbot call', async () => {
    await result.current.deleteChatbotById({ name: 'anyName' } as any);

    expect(baseDeleteChatbotById).toHaveBeenCalled();
  });
});

describe('handleSettled', () => {
  vi.mock('../../query-keys', () => ({
    invalidateAllChatbotsQuery: vi.fn(),
  }));

  it('should call invalidateAllChatbotsQuery', () => {
    handleSettled();
    expect(invalidateAllChatbotsQuery).toHaveBeenCalled();
  });
});
