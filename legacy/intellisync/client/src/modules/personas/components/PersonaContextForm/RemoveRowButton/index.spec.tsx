import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { RemoveRowButton } from '.';

describe('RemoveRowButton', () => {
  const removeRow = vi.fn();

  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    render(<RemoveRowButton removeRow={removeRow} />);

    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  it('should call removeRow when clicked', async () => {
    render(<RemoveRowButton removeRow={removeRow} />);

    const element = screen.getByRole('button');
    await userEvent.click(element);

    expect(removeRow).toHaveBeenCalled();
  });

  it('should not render a button if is first row', () => {
    render(<RemoveRowButton removeRow={removeRow} isFirstRow />);

    const element = screen.queryByRole('button');
    expect(element).not.toBeInTheDocument();
  });
});
