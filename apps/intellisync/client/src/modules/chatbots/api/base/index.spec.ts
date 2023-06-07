import { describe, expect, it, vi } from 'vitest';

import { baseSelectAll, baseDeleteById } from '@/lib/supabase/api';
import {
  baseDeleteChatbotById,
  baseInsertChatbot,
  baseSelectAllChatbots,
} from '.';

vi.mock('@/lib/supabase/api', () => ({
  baseSelectAll: vi.fn(),
  baseDeleteById: vi.fn(),
}));

describe('baseSelectAllChatbots', () => {
  it('should pass the correct table to baseSelectAll', async () => {
    await baseSelectAllChatbots({} as any);

    expect(baseSelectAll).toHaveBeenCalledWith('chatbots', {});
  });
});

describe('baseDeleteChatbotById', () => {
  it('should pass the correct table to baseDeleteById', async () => {
    await baseDeleteChatbotById({ id: 'any' }, {} as any);

    expect(baseDeleteById).toHaveBeenCalledWith({ id: 'any' }, 'chatbots', {});
  });
});
