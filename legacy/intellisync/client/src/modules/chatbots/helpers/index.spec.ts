import { beforeEach, describe, expect, it, vi } from 'vitest';

import { queryClient } from '@/lib/react-query/client';
import {
  setChatbotSettingsQuery,
  getChatbotSettingsQuery,
  cancelChatbotSettingsQuery,
} from '.';

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

describe('setChatbotSettingsQuery', () => {
  it('should pass the correct params to setQueryData', () => {
    const initialData = {};
    setChatbotSettingsQuery('any', initialData);

    const [queryKey] = vi.mocked(queryClient.setQueryData).mock.calls[0];

    expect(queryKey).toEqual(['chatbots', 'any', 'settings']);
  });
});

describe('getChatbotSettingsQuery', () => {
  it('should pass the correct params to getQueryData', () => {
    getChatbotSettingsQuery('any');

    expect(queryClient.getQueryData).toHaveBeenCalledWith([
      'chatbots',
      'any',
      'settings',
    ]);
  });
});

describe('cancelChatbotSettingsQuery', () => {
  it('should pass the correct params to cancelQueries', async () => {
    await cancelChatbotSettingsQuery('any');

    expect(queryClient.cancelQueries).toHaveBeenCalledWith([
      'chatbots',
      'any',
      'settings',
    ]);
  });
});
