import { afterEach, expect, describe, it, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useSupabase } from '@/lib/supabase/Provider';
import { assertObjectProperties } from '@odyssey/tests';
import {
  useBaseUpdatePersonaByChatbot,
  handleMutation,
  handleError,
} from '.';
import {
  cancelChatbotPersonaQuery,
  getChatbotPersonaQuery,
  setChatbotPersonaQuery
} from '../../helpers';
import { baseUpdatePersonaByChatbot } from '../../api/base';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseUpdatePersonaByChatbot: vi.fn(),
}));

vi.mock('../../helpers', () => ({
  cancelChatbotPersonaQuery: vi.fn(),
  getChatbotPersonaQuery: vi.fn(),
  setChatbotPersonaQuery: vi.fn(),
}));

describe('useBaseUpdatePersonaByChatbot', () => {
  const { rerender, result, unmount } = renderHook(() =>
    useBaseUpdatePersonaByChatbot()
  );

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['updatePersonaByChatbot'];
    assertObjectProperties(properties, result.current);
  });

  it('should call baseUpdatePersonaByChatbot with the correct params', async () => {
    const { updatePersonaByChatbot } = result.current;
    const params = {
      chatbot_id: '1',
      params: {},
    };

    await updatePersonaByChatbot(params);
    expect(baseUpdatePersonaByChatbot).toHaveBeenCalledWith(
      params,
      expect.any(Object)
    );
  });
});

describe('handleMutation', () => {
  it('should call cancelChatbotPersonaQuery with the correct params', async () => {
    const params = {
      chatbot_id: '1',
      params: {},
    };

    await handleMutation(params);
    expect(cancelChatbotPersonaQuery).toHaveBeenCalledWith(params.chatbot_id);
  });

  it('should call getChatbotPersonaQuery with the correct params', async () => {
    const params = {
      chatbot_id: '1',
      params: {},
    };

    await handleMutation(params);
    expect(getChatbotPersonaQuery).toHaveBeenCalledWith(params.chatbot_id);
  });

  it('should call setChatbotPersonaQuery with the correct params', async () => {
    const params = {
      chatbot_id: '1',
      params: {},
    };

    await handleMutation(params);
    expect(setChatbotPersonaQuery).toHaveBeenCalledWith(
      params.chatbot_id,
      params.params
    );
  });
});

describe('handleError', () => {
  it('should call setChatbotPersonaQuery with the correct params', () => {
    const params = {
      chatbot_id: '1',
      params: {},
    };

    handleError(params as any);
    expect(setChatbotPersonaQuery).toHaveBeenCalledWith(
      params.chatbot_id,
      params.params
    );
  });
});
