import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { type Message } from 'ai';

import { AssistantMessage } from '../AssistantMessage';
import { UserMessage } from '../UserMessage';
import { ChatMessage } from '.';

vi.mock('../UserMessage', () => ({
  UserMessage: vi.fn(() => <div />),
}));

vi.mock('../AssistantMessage', () => ({
  AssistantMessage: vi.fn(() => <div />),
}));

describe('ChatMessage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render AssistantMessage if role is assistant', () => {
    const message: Message = {
      id: 'any',
      role: 'assistant',
      content: 'any content',
    };

    render(<ChatMessage message={message} />);

    expect(AssistantMessage).toHaveBeenCalled();
  });

  it('should not render AssistantMessage if role is not assistant', () => {
    const message: Message = {
      id: 'any',
      role: 'user',
      content: 'any content',
    };

    render(<ChatMessage message={message} />);

    expect(AssistantMessage).not.toHaveBeenCalled();
  });

  it('should render UserMessage if role is user', () => {
    const message: Message = {
      id: 'any',
      role: 'user',
      content: 'any content',
    };

    render(<ChatMessage message={message} />);

    expect(UserMessage).toHaveBeenCalled();
  });

  it('should not render UserMessage if role is not user', () => {
    const message: Message = {
      id: 'any',
      role: 'assistant',
      content: 'any content',
    };

    render(<ChatMessage message={message} />);

    expect(UserMessage).not.toHaveBeenCalled();
  });
});
