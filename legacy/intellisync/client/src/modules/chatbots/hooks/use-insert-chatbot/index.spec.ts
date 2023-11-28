import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { handleSettled, useBaseInsertChatbot } from '.';
import { baseInsertChatbot } from '../../api/base';
import { assertObjectProperties } from '@odyssey/tests';
import { invalidateAllChatbotsQuery } from '../../query-keys';

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
    await result.current.insertChatbot({ name: 'anyName' } as any);

    expect(baseInsertChatbot).toHaveBeenCalled();
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
