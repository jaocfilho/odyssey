import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import {
  getChatbotFileSourceQueryData,
  invalidateChatbotFileSourceQuery,
  setChatbotFileSourceQueryData,
} from '@/modules/chatbots/query-keys';
import { baseDeleteChatbotFileSourceById } from '../../api/base';
import {
  useBaseDeleteChatbotFileSourceById,
  handleSettled,
  handleSuccess,
} from '.';

vi.mock('../../api/base', () => ({
  baseDeleteChatbotFileSourceById: vi.fn(),
}));

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('@/modules/chatbots/query-keys', () => ({
  getChatbotFileSourceQueryData: vi.fn(),
  invalidateChatbotFileSourceQuery: vi.fn(),
  setChatbotFileSourceQueryData: vi.fn(),
}));

describe('useBaseDeleteChatbotFileSourceById', () => {
  const { result, rerender, unmount } = renderHook(() =>
    useBaseDeleteChatbotFileSourceById()
  );

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['deleteChatbotFileSourceById'];
    assertObjectProperties(properties, result.current);
  });

  it('should call baseDeleteChatbotFileSourceById with the correct params', async () => {
    const params = { id: 'id' };
    await result.current.deleteChatbotFileSourceById(params);

    expect(baseDeleteChatbotFileSourceById).toHaveBeenCalledWith(
      params,
      expect.any(Object)
    );
  });
});

describe('handleSettled', () => {
  it('should call invalidateChatbotFileSourceQuery with the correct params', async () => {
    const id = 'id';
    await handleSettled(id);

    expect(invalidateChatbotFileSourceQuery).toHaveBeenCalledWith(id);
  });
});

describe('handleSuccess', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should call setChatbotFileSourceQueryData with the correct params', () => {
    const id = 'id';
    const previousData = [{ id }];
    vi.mocked(getChatbotFileSourceQueryData).mockReturnValueOnce(
      previousData as any
    );
    handleSuccess(id);

    expect(setChatbotFileSourceQueryData).toHaveBeenCalledWith(id, []);
  });

  it('should not call setChatbotFileSourceQueryData if previousData is undefined', () => {
    const id = 'id';
    const previousData = undefined;
    vi.mocked(getChatbotFileSourceQueryData).mockReturnValueOnce(
      previousData as any
    );
    handleSuccess(id);

    expect(setChatbotFileSourceQueryData).not.toHaveBeenCalled();
  });
});
