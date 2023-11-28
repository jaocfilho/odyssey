import { describe, expect, it, vi } from 'vitest';

import { baseDeleteById } from '@/lib/supabase/api';
import { baseDeleteChatbotById } from '.';

vi.mock('@/lib/supabase/api', () => ({
  baseDeleteById: vi.fn(),
}));

describe('baseDeleteChatbotById', () => {
  it('should pass the correct table to baseDeleteById', async () => {
    await baseDeleteChatbotById({ id: 'any' }, {} as any);

    expect(baseDeleteById).toHaveBeenCalledWith({ id: 'any' }, 'chatbots', {});
  });
});
