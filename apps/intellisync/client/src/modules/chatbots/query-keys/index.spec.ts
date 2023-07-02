import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  chatbotsQueryKeys,
  invalidateAllChatbotsQuery,
  invalidateChatbotSettingsQuery,
  invalidateChatbotPersonaQuery,
  invalidateChatbotFileSourceQuery,
  getChatbotFileSourceQueryData,
  setChatbotFileSourceQueryData,
} from '.';
import { queryClient } from '@/lib/react-query/client';

vi.mock('@/lib/react-query/client', () => ({
  queryClient: {
    invalidateQueries: vi.fn(),
    getQueryData: vi.fn(),
    setQueryData: vi.fn(),
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

  it('should return the persona key', () => {
    const personaKey = chatbotsQueryKeys.persona('id');
    expect(personaKey).toEqual(['chatbots', 'id', 'persona']);
  });

  it('should return the initial messages key', () => {
    const initialMessagesKey = chatbotsQueryKeys.initialMessages('id');
    expect(initialMessagesKey).toEqual(['chatbots', 'id', 'initialMessages']);
  });

  it('should return the file sources key', () => {
    const fileSourcesKey = chatbotsQueryKeys.fileSources('id');
    expect(fileSourcesKey).toEqual(['chatbots', 'id', 'fileSources']);
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

describe('invalidateChatbotPersonaQuery', () => {
  it('should invalidate the chatbot persona query', () => {
    const queryKey = chatbotsQueryKeys.persona('id');

    invalidateChatbotPersonaQuery('id');

    expect(queryClient.invalidateQueries).toHaveBeenCalledWith({ queryKey });
  });
});

describe('invalidateChatbotFileSourceQuery', () => {
  it('should invalidate the chatbot file sources query', () => {
    const queryKey = chatbotsQueryKeys.fileSources('id');

    invalidateChatbotFileSourceQuery('id');

    expect(queryClient.invalidateQueries).toHaveBeenCalledWith({ queryKey });
  });
});

describe('getChatbotFileSourceQueryData', () => {
  it('should get the chatbot file sources query data', () => {
    const queryKey = chatbotsQueryKeys.fileSources('id');

    getChatbotFileSourceQueryData('id');

    expect(queryClient.getQueryData).toHaveBeenCalledWith(queryKey);
  });
});

describe('setChatbotFileSourceQueryData', () => {
  it('should set the chatbot file sources query data', () => {
    const queryKey = chatbotsQueryKeys.fileSources('id');
    const data = [{ id: '1', name: 'test' }];

    setChatbotFileSourceQueryData('id', data as any);

    expect(queryClient.setQueryData).toHaveBeenCalledWith(queryKey, data);
  });
});
