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
    await serverSelectAllChatbots({ organizationId: 'any' });

    const supabase = createServerSupabase();

    expect(baseSelectAllChatbots).toHaveBeenCalledWith(
      { organizationId: 'any' },
      supabase
    );
  });
});
