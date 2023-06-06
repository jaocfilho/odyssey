import { afterEach, expect, describe, it, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useSupabase } from '@/lib/supabase/Provider';
import { assertObjectProperties } from '@odyssey/tests';
import {
  BaseUpdateChatbotSettingsByIdParams,
  baseUpdateChatbotSettingsById,
} from '../../api/base';
import {
  useBaseUpdateChatbotSettingsById,
  handleMutation,
  handleError,
} from '.';
import {
  cancelChatbotSettingsQuery,
  getChatbotSettingsQuery,
  setChatbotSettingsQuery,
} from '../../helpers';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseUpdateChatbotSettingsById: vi.fn(),
}));

vi.mock('../../helpers', () => ({
  cancelChatbotSettingsQuery: vi.fn(),
  getChatbotSettingsQuery: vi.fn(),
  setChatbotSettingsQuery: vi.fn(),
}));

describe('useBaseUpdateChatbotSettingsById', () => {
  const { rerender, result, unmount } = renderHook(() =>
    useBaseUpdateChatbotSettingsById()
  );

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['updateChatbotSettingsById'];
    assertObjectProperties(properties, result.current);
  });

  it('should call baseUpdateChatbotSettingsById with the correct params', async () => {
    const { updateChatbotSettingsById } = result.current;
    const params: BaseUpdateChatbotSettingsByIdParams = {
      id: '1',
      settings: { model: 'gpt-4' },
    };

    await updateChatbotSettingsById(params);
    expect(baseUpdateChatbotSettingsById).toHaveBeenCalledWith(
      params,
      expect.any(Object)
    );
  });
});

describe('handleMutation', () => {
  it('should call cancelChatbotSettingsQuery with the correct params', async () => {
    const params: BaseUpdateChatbotSettingsByIdParams = {
      id: '1',
      settings: { model: 'gpt-4' },
    };

    await handleMutation(params);
    expect(cancelChatbotSettingsQuery).toHaveBeenCalledWith(params.id);
  });

  it('should call getChatbotSettingsQuery with the correct params', async () => {
    const params: BaseUpdateChatbotSettingsByIdParams = {
      id: '1',
      settings: { model: 'gpt-4' },
    };

    await handleMutation(params);
    expect(getChatbotSettingsQuery).toHaveBeenCalledWith(params.id);
  });

  it('should call setChatbotSettingsQuery with the correct params', async () => {
    const params: BaseUpdateChatbotSettingsByIdParams = {
      id: '1',
      settings: { model: 'gpt-4' },
    };

    await handleMutation(params);
    expect(setChatbotSettingsQuery).toHaveBeenCalledWith(
      params.id,
      params.settings
    );
  });
});

describe('handleError', () => {
  it('should call setChatbotSettingsQuery with the correct params', () => {
    const params = {
      id: '1',
      context: { previousSettings: { model: 'gpt-4' } },
    };

    // @ts-ignore
    handleError(params);
    expect(setChatbotSettingsQuery).toHaveBeenCalledWith(
      params.id,
      params.context?.previousSettings
    );
  });
});
