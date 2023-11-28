import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { AddRowButton } from '.';

describe('AddRowButton', () => {
  const addRow = vi.fn();

  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    render(<AddRowButton addRow={addRow} />);

    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  it('should call addRow when clicked', async () => {
    render(<AddRowButton addRow={addRow} />);

    const element = screen.getByRole('button');
    await userEvent.click(element);

    expect(addRow).toHaveBeenCalled();
  });
});
