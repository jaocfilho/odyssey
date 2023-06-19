import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { NewMessageForm } from '.';

describe('NewMessageForm', () => {
  const onSubmit = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a textarea', () => {
    render(<NewMessageForm onSubmit={onSubmit} />);

    const element = screen.getByRole('textbox');

    expect(element).toBeInTheDocument();
  });

  it('should call onSubmit when the form is submitted', async () => {
    render(<NewMessageForm onSubmit={onSubmit} />);

    const element = screen.getByRole('textbox');
    const message = 'Hello World';

    await userEvent.type(element, message);
    await userEvent.type(element, '{enter}');

    expect(onSubmit).toHaveBeenCalledWith({ message });
  });

  it('should not call onSubmit when the form is submitted with an empty message', async () => {
    render(<NewMessageForm onSubmit={onSubmit} />);

    const element = screen.getByRole('textbox');

    await userEvent.type(element, '{enter}');

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should reset the form when the form is submitted', async () => {
    render(<NewMessageForm onSubmit={onSubmit} />);

    const element = screen.getByRole('textbox');
    const message = 'Hello World';

    await userEvent.type(element, message);
    await userEvent.type(element, '{enter}');

    expect(element).toHaveValue('');
  });

  it('should not reset the form when the form is submitted with an empty message', async () => {
    render(<NewMessageForm onSubmit={onSubmit} />);

    const element = screen.getByRole('textbox');

    await userEvent.type(element, '{enter}');

    expect(element).toHaveValue('');
  });

  it('should not submit the form when the shift key is pressed', async () => {
    render(<NewMessageForm onSubmit={onSubmit} />);

    const element = screen.getByRole('textbox');

    await userEvent.type(element, '{shift}{enter}');

    expect(onSubmit).not.toHaveBeenCalled();
  });

  // it('should not submit the form when the shift key is pressed and the message is not empty', async () => {
  //   render(<NewMessageForm onSubmit={onSubmit} />);

  //   const element = screen.getByRole('textbox');
  //   const message = 'Hello World';

  //   await userEvent.type(element, message);
  //   await userEvent.type(element, '{shift}{enter}');

  //   expect(onSubmit).not.toHaveBeenCalled();
  // });
});
