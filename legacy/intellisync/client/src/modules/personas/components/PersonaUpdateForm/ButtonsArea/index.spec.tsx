import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { ButtonsArea } from '.';

describe('ButtonsArea', () => {
  const reset = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render two buttons', () => {
    render(<ButtonsArea formId="form-id" reset={reset} disabled={false} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('should render a disabled save button when disabled is true', () => {
    render(<ButtonsArea formId="form-id" reset={reset} disabled={true} />);

    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).toBeDisabled();
  });

  it('should render an enabled save button when disabled is false', () => {
    render(<ButtonsArea formId="form-id" reset={reset} disabled={false} />);

    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).not.toBeDisabled();
  });

  it('should render a disabled cancel button when disabled is true', () => {
    render(<ButtonsArea formId="form-id" reset={reset} disabled={true} />);

    const button = screen.getByRole('button', { name: 'Cancel' });
    expect(button).toBeDisabled();
  });

  it('should render an enabled cancel button when disabled is false', () => {
    render(<ButtonsArea formId="form-id" reset={reset} disabled={false} />);

    const button = screen.getByRole('button', { name: 'Cancel' });
    expect(button).not.toBeDisabled();
  });

  it('should call reset when cancel button is clicked', async () => {
    render(<ButtonsArea formId="form-id" reset={reset} disabled={false} />);

    const button = screen.getByRole('button', { name: 'Cancel' });
    await userEvent.click(button);

    expect(reset).toHaveBeenCalled();
  });
});
