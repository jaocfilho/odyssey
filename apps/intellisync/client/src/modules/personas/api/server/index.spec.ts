import { beforeEach, describe, vi, it, expect } from 'vitest';

import { createServerSupabase } from '@/lib/supabase/server';
import { baseSelectPersonaByChatbot } from '../base';
import { serverSelectPersonaByChatbot } from '.';

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabase: vi.fn(() => ({})),
}));

vi.mock('../base', () => ({
  baseSelectPersonaByChatbot: vi.fn(),
}));

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('serverSelectPersonaByChatbot', () => {
  it('should call baseSelectPersonaByChatbot with the correct params', async () => {
    const chatbot_id = 'chatbot_id';
    const params = { chatbot_id };

    await serverSelectPersonaByChatbot(params);

    const supabase = vi.mocked(createServerSupabase).mock.results[0].value;

    expect(baseSelectPersonaByChatbot).toHaveBeenCalledWith(params, supabase);
  });
});
