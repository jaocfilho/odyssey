import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';

import { DeleteChatbotButton } from '.';
import { assertButtonIsInTheDocument } from '@odyssey/tests';
import { useDeleteMutation } from './useDeleteMutation';

vi.mock('./useDeleteMutation', () => ({
  useDeleteMutation: vi.fn(() => ({
    deleteChatbot: vi.fn(),
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

  it('should call deleteChatbot on confirm', async () => {
    const deleteChatbot = vi.fn();
    vi.mocked(useDeleteMutation).mockReturnValue({ deleteChatbot } as any);

    render(<DeleteChatbotButton id="any" />);

    await userEvent.click(screen.getByText('Delete my chatbot'));
    await userEvent.click(screen.getByText('Delete'));

    expect(deleteChatbot).toHaveBeenCalled();
  });
});
