import { describe, expect, it, vi } from 'vitest';

import { createServerSupabase } from '@/lib/supabase/server';
import { baseSelectAllChatbots } from '../base';
import { serverSelectAllChatbots } from '.';

vi.mock('../base', () => ({
  baseSelectAllChatbots: vi.fn(),
}));

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabase: vi.fn(),
}));

describe('serverSelectAllChatbots', () => {
  it('should pass the server supabase to baseSelectAllChatbots', async () => {
    await serverSelectAllChatbots();

    const supabase = vi.mocked(createServerSupabase).mock.results[0].value;

    expect(baseSelectAllChatbots).toHaveBeenCalledWith(supabase);
  });
});
