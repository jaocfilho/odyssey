import { describe, expect, it, vi } from 'vitest';

import { baseSelectAll, baseDeleteById, baseInsert } from '@/lib/supabase/api';
import {
  baseDeleteChatbotById,
  baseInsertChatbot,
  baseSelectAllChatbots,
} from '.';

vi.mock('@/lib/supabase/api', () => ({
  baseSelectAll: vi.fn(),
  baseInsert: vi.fn(),
  baseDeleteById: vi.fn(),
}));

describe('baseSelectAllChatbots', () => {
  it('should pass the correct table to baseSelectAll', async () => {
    await baseSelectAllChatbots({} as any);

    expect(baseSelectAll).toHaveBeenCalledWith('chatbots', {});
  });
});

describe('baseInsertChatbot', () => {
  it('should pass the correct table to baseInsert', async () => {
    await baseInsertChatbot({ name: 'any' } as any, {} as any);

    expect(baseInsert).toHaveBeenCalledWith({ name: 'any' }, 'chatbots', {});
  });
});

describe('baseDeleteChatbotById', () => {
  it('should pass the correct table to baseDeleteById', async () => {
    await baseDeleteChatbotById({ id: 'any' }, {} as any);

    expect(baseDeleteById).toHaveBeenCalledWith({ id: 'any' }, 'chatbots', {});
  });
});
