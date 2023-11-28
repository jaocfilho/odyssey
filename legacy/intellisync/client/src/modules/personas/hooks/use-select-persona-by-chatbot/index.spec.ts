import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseSelectPersonaByChatbot } from '../../api/base';
import { useBaseSelectPersonaByChatbot } from '.';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({
    supabase: {},
  })),
}));

vi.mock('../../api/base', () => ({
  baseSelectPersonaByChatbot: vi.fn(),
}));

describe('useBaseSelectPersonaByChatbot', () => {
  const { result, rerender, unmount } = renderHook(() =>
    useBaseSelectPersonaByChatbot()
  );

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['selectPersonaByChatbot'];
    assertObjectProperties(properties, result.current);
  });

  it('should call baseSelectPersonaByChatbot with the correct params', () => {
    const { supabase } = useSupabase();
    const { selectPersonaByChatbot } = result.current;

    const params = { chatbot_id: 'any' };
    selectPersonaByChatbot(params);

    expect(baseSelectPersonaByChatbot).toHaveBeenCalledWith(params, supabase);
  });
});
