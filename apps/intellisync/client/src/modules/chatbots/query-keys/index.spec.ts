import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  chatbotsQueryKeys,
  invalidateAllChatbotsQuery,
  invalidateChatbotSettingsQuery,
} from '.';
import { queryClient } from '@/lib/react-query/client';

vi.mock('@/lib/react-query/client', () => ({
  queryClient: {
    invalidateQueries: vi.fn(),
  },
}));

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('chatbotsQueryKeys', () => {
  it('should return the base key', () => {
    const baseKey = chatbotsQueryKeys.base;
    expect(baseKey).toEqual(['chatbots']);
  });

  it('should return the all chatbots key', () => {
    const allKey = chatbotsQueryKeys.all();
    expect(allKey).toEqual(['chatbots']);
  });

  it('should return the settings key', () => {
    const settingsKey = chatbotsQueryKeys.settings('id');
    expect(settingsKey).toEqual(['chatbots', 'id', 'settings']);
  });
});

describe('invalidateAllChatbotsQuery', () => {
  it('should invalidate the all chatbots query', () => {
    const queryKey = chatbotsQueryKeys.all();

    invalidateAllChatbotsQuery();

    expect(queryClient.invalidateQueries).toHaveBeenCalledWith({ queryKey });
  });
});

describe('invalidateChatbotSettingsQuery', () => {
  it('should invalidate the chatbot settings query', () => {
    const queryKey = chatbotsQueryKeys.settings('id');

    invalidateChatbotSettingsQuery('id');

    expect(queryClient.invalidateQueries).toHaveBeenCalledWith({ queryKey });
  });
});
