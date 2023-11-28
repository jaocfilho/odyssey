import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useChatbots } from '@/modules/chatbots/hooks/use-chatbots';
import { Chatbots } from '.';

vi.mock('@/modules/chatbots/hooks/use-chatbots', () => ({
  useChatbots: vi.fn(),
}));

vi.mock('@/modules/chatbots/hooks/use-is-current-chatbot-path', () => ({
  useIsCurrentChatbotPath: vi.fn(),
}));

describe('Chatbots', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a chatbots list if there is data', () => {
    const data = [
      { id: '1', name: 'Chatbot 1' },
      { id: '2', name: 'Chatbot 2' },
    ];

    vi.mocked(useChatbots).mockReturnValue({
      data,
    } as any);

    render(<Chatbots loading={null} />);

    data.forEach((chatbot) => {
      expect(screen.getByText(chatbot.name)).toBeInTheDocument();
    });
  });

  it('should display the numbers of chatbots', () => {
    const data = [
      { id: '1', name: 'Chatbot 1' },
      { id: '2', name: 'Chatbot 2' },
    ];

    vi.mocked(useChatbots).mockReturnValue({
      data,
    } as any);

    render(<Chatbots loading={null} />);

    expect(screen.getByText('Chatbots (2)')).toBeInTheDocument();
  });

  it('should render a loading component if there is no data', () => {
    vi.mocked(useChatbots).mockReturnValue({
      data: null,
      isLoading: true,
    } as any);

    render(<Chatbots loading={<div>Loading...</div>} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render a list of chatbots if there is data and there is loading', () => {
    const data = [
      { id: '1', name: 'Chatbot 1' },
      { id: '2', name: 'Chatbot 2' },
    ];

    vi.mocked(useChatbots).mockReturnValue({
      data,
      isLoading: true,
    } as any);

    render(<Chatbots loading={<div>Loading...</div>} />);

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    data.forEach((chatbot) => {
      expect(screen.getByText(chatbot.name)).toBeInTheDocument();
    });
  });

  it('should render nothing if there is no data and is not loading', () => {
    vi.mocked(useChatbots).mockReturnValue({
      data: null,
      isLoading: false,
    } as any);

    render(<Chatbots loading={<div>Loading...</div>} />);

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
});
