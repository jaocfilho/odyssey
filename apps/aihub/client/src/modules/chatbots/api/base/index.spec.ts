import { describe, expect, it, vi } from 'vitest';

import { baseSelectAll } from '@/lib/supabase/api';
import { baseSelectAllChatbots } from '.';

vi.mock('@/lib/supabase/api', () => ({
  baseSelectAll: vi.fn(),
}));

describe('baseSelectAllChatbots', () => {
  it('should pass the correct table to baseSelectAll', async () => {
    // @ts-ignore
    await baseSelectAllChatbots({});

    expect(baseSelectAll).toHaveBeenCalledWith('chatbots', {});
  });
});
