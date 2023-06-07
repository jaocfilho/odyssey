import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { useDeleteChatbotById } from '@/modules/chatbots/hooks/use-delete-chatbot-by-id';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';
import { useDeleteMutation } from '.';
import { renderHook } from '@testing-library/react';
import { assertObjectProperties } from '@odyssey/tests';

vi.mock('@/modules/chatbots/hooks/use-delete-chatbot-by-id', () => ({
  useDeleteChatbotById: vi.fn(() => ({
    mutate: vi.fn(),
  })),
}));

vi.mock('@/modules/navigation/hooks/use-navigation', () => ({
  useNavigation: vi.fn(() => ({
    redirectToChatbots: vi.fn(),
  })),
}));

describe('useDeleteMutation', () => {
  const { result, rerender } = renderHook(() => useDeleteMutation('anyId'));

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  it('should return the correct object', () => {
    const properties = ['deleteChatbot'];
    assertObjectProperties(properties, result.current);
  });

  it('should call mutate when deleteChatbot is called', () => {
    const mutate = vi.fn();
    vi.mocked(useDeleteChatbotById).mockReturnValueOnce({ mutate } as any);

    rerender();

    result.current.deleteChatbot();
    expect(mutate).toHaveBeenCalledWith(
      { id: 'anyId' },
      { onSuccess: expect.any(Function) }
    );
  });
});
