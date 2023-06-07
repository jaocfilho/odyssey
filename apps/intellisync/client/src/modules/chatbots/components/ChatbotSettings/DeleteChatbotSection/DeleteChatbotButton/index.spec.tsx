import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';

import { DeleteChatbotButton } from '.';
import { assertButtonIsInTheDocument } from '@odyssey/tests';
import { useDeleteChatbotById } from '@/modules/chatbots/hooks/use-delete-chatbot-by-id';

vi.mock('@/modules/chatbots/hooks/use-delete-chatbot-by-id', () => ({
  useDeleteChatbotById: vi.fn(() => ({
    mutate: vi.fn(),
  })),
}));

describe('DeleteChatbotButton', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    render(<DeleteChatbotButton id="any" />);

    assertButtonIsInTheDocument('Delete my chatbot');
  });

  it('should not display the modal on render', () => {
    render(<DeleteChatbotButton id="any" />);

    const element = screen.queryByText('Delete chatbot');
    expect(element).not.toBeInTheDocument();
  });

  it('should render the modal on button click', async () => {
    render(<DeleteChatbotButton id="any" />);

    await userEvent.click(screen.getByText('Delete my chatbot'));

    const element = screen.getByText('Delete chatbot');
    expect(element).toBeInTheDocument();
  });

  it('should close the modal on cancel', async () => {
    render(<DeleteChatbotButton id="any" />);

    await userEvent.click(screen.getByText('Delete my chatbot'));
    await userEvent.click(screen.getByText('Cancel'));

    const element = screen.queryByText('Delete chatbot');
    expect(element).not.toBeInTheDocument();
  });

  it('should close the modal on confirm', async () => {
    render(<DeleteChatbotButton id="any" />);

    await userEvent.click(screen.getByText('Delete my chatbot'));
    await userEvent.click(screen.getByText('Delete'));

    const element = screen.queryByText('Delete chatbot');
    expect(element).not.toBeInTheDocument();
  });

  it('should call the delete mutation on confirm', async () => {
    const mutate = vi.fn();
    vi.mocked(useDeleteChatbotById).mockReturnValue({ mutate } as any);

    render(<DeleteChatbotButton id="any" />);

    await userEvent.click(screen.getByText('Delete my chatbot'));
    await userEvent.click(screen.getByText('Delete'));

    expect(mutate).toHaveBeenCalledWith({ id: 'any' });
  });
});
