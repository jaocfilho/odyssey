import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { type Message } from 'ai';

import { ChatMessage } from '../ChatMessage';
import { ChatMessages } from '.';

vi.mock('../ChatMessage', () => ({
  ChatMessage: vi.fn(() => <div />),
}));

describe('ChatMessages', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should not render messages with the role system', () => {
    const messages: Message[] = [
      {
        id: 'any',
        role: 'system',
        content: 'any content',
      },
    ];

    render(<ChatMessages messages={messages} />);

    expect(ChatMessage).not.toHaveBeenCalled();
  });

  it('should render messages with the role assistant', () => {
    const messages: Message[] = [
      {
        id: 'any',
        role: 'assistant',
        content: 'any content',
      },
    ];

    render(<ChatMessages messages={messages} />);

    expect(ChatMessage).toHaveBeenCalled();
  });

  it('should render messages with the role user', () => {
    const messages: Message[] = [
      {
        id: 'any',
        role: 'user',
        content: 'any content',
      },
    ];

    render(<ChatMessages messages={messages} />);

    expect(ChatMessage).toHaveBeenCalled();
  });

  it('should render all messages', () => {
    const messages: Message[] = [
      {
        id: 'any',
        role: 'assistant',
        content: 'any content',
      },
      {
        id: 'any',
        role: 'user',
        content: 'any content',
      },
    ];

    render(<ChatMessages messages={messages} />);

    expect(ChatMessage).toHaveBeenCalledTimes(2);
  });
});
