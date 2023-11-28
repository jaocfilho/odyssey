import { describe, it, vi, expect, afterEach, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { useIsCurrentChatbotPath } from '@/modules/chatbots/hooks/use-is-current-chatbot-path';
import { ChatbotsListItem } from '.';

vi.mock('@/modules/chatbots/hooks/use-is-current-chatbot-path', () => ({
  useIsCurrentChatbotPath: vi.fn(() => true),
}));

describe('ChatbotsListItem', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the name of the item', () => {
    render(<ChatbotsListItem name="anyName" id="anyId" />);
    expect(screen.getByText('anyName')).toBeInTheDocument();
  });
});
