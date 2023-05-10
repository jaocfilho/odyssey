import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ActionButton } from '.';

describe('ActionButton', () => {
  const closeDrawer = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    render(<ActionButton closeDrawer={closeDrawer} />);
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('should call closeDrawer on click', async () => {
    render(<ActionButton closeDrawer={closeDrawer} />);
    const button = screen.getByText('Save');

    await userEvent.click(button);

    expect(closeDrawer).toHaveBeenCalled();
  });
});
