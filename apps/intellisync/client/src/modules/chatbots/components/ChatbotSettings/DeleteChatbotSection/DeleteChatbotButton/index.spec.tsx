import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';

import { DeleteChatbotButton } from '.';
import { assertButtonIsInTheDocument } from '@odyssey/tests';

describe('DeleteChatbotButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    render(<DeleteChatbotButton />);

    assertButtonIsInTheDocument('Delete my chatbot');
  });

  it('should not display the modal on render', () => {
    render(<DeleteChatbotButton />);

    const element = screen.queryByText('Delete chatbot');
    expect(element).not.toBeInTheDocument();
  });

  it('should render the modal on button click', async () => {
    render(<DeleteChatbotButton />);

    await userEvent.click(screen.getByText('Delete my chatbot'));

    const element = screen.getByText('Delete chatbot');
    expect(element).toBeInTheDocument();
  });

  it('should close the modal on cancel', async () => {
    render(<DeleteChatbotButton />);

    await userEvent.click(screen.getByText('Delete my chatbot'));
    await userEvent.click(screen.getByText('Cancel'));

    const element = screen.queryByText('Delete chatbot');
    expect(element).not.toBeInTheDocument();
  });

  it('should close the modal on confirm', async () => {
    render(<DeleteChatbotButton />);

    await userEvent.click(screen.getByText('Delete my chatbot'));
    await userEvent.click(screen.getByText('Delete'));

    const element = screen.queryByText('Delete chatbot');
    expect(element).not.toBeInTheDocument();
  });
});
