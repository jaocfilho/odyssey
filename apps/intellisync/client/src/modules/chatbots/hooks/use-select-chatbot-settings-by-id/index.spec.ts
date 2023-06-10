import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseSelectChatbotSettingsById } from '../../api/base';
import { useBaseSelectChatbotSettingsById } from '.';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({
    supabase: {},
  })),
}));

vi.mock('../../api/base', () => ({
  baseSelectChatbotSettingsById: vi.fn(),
}));

describe('useBaseSelectChatbotSettingsById', () => {
  const { result, rerender, unmount } = renderHook(() =>
    useBaseSelectChatbotSettingsById()
  );

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['selectChatbotSettingsById'];
    assertObjectProperties(properties, result.current);
  });

  it('should call baseSelectChatbotSettingsById with the correct params', () => {
    const { supabase } = useSupabase();
    const { selectChatbotSettingsById } = result.current;

    const params = { id: 1 };
    selectChatbotSettingsById(params as any);

    expect(baseSelectChatbotSettingsById).toHaveBeenCalledWith(
      params,
      supabase
    );
  });
});
