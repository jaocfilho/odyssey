import { describe, expect, it, vi, beforeEach } from 'vitest';

import {
  cancelChatbotPersonaQuery,
  getChatbotPersonaQuery,
  setChatbotPersonaQuery,
  setChatbotInitialMessagesQuery,
  getChatbotInitialMessagesQuery,
} from '.';
import { queryClient } from '@/lib/react-query/client';

vi.mock('@/lib/react-query/client', () => ({
  queryClient: {
    setQueryData: vi.fn(),
    getQueryData: vi.fn(),
    cancelQueries: vi.fn(),
  },
}));

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('cancelChatbotPersonaQuery', () => {
  it('should pass the correct params to cancelQueries', async () => {
    await cancelChatbotPersonaQuery('any');

    expect(queryClient.cancelQueries).toHaveBeenCalledWith([
      'chatbots',
      'any',
      'persona',
    ]);
  });
});

describe('getChatbotPersonaQuery', () => {
  it('should pass the correct params to getQueryData', () => {
    getChatbotPersonaQuery('any');

    expect(queryClient.getQueryData).toHaveBeenCalledWith([
      'chatbots',
      'any',
      'persona',
    ]);
  });
});

describe('setChatbotPersonaQuery', () => {
  it('should pass the correct params to setQueryData', () => {
    const initialData = {};
    setChatbotPersonaQuery('any', initialData);

    const [queryKey] = vi.mocked(queryClient.setQueryData).mock.calls[0];

    expect(queryKey).toEqual(['chatbots', 'any', 'persona']);
  });
});

describe('setChatbotInitialMessagesQuery', () => {
  it('should pass the correct params to setQueryData', () => {
    const data = [] as any;
    setChatbotInitialMessagesQuery('any', data);

    const [queryKey] = vi.mocked(queryClient.setQueryData).mock.calls[0];

    expect(queryKey).toEqual(['chatbots', 'any', 'initialMessages']);
  });
});

describe('getChatbotInitialMessagesQuery', () => {
  it('should pass the correct params to getQueryData', () => {
    getChatbotInitialMessagesQuery('any');

    expect(queryClient.getQueryData).toHaveBeenCalledWith([
      'chatbots',
      'any',
      'initialMessages',
    ]);
  });
});
