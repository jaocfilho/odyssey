import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ComponentDrawerFooter } from '.';

describe('ComponentDrawerFooter', () => {
  const onCloseMock = vi.fn();
  const actionButtonMock = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders cancel button', () => {
    render(
      <ComponentDrawerFooter
        onClose={onCloseMock}
        actionButton={actionButtonMock}
      />
    );

    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('should call onClose when cancel button is clicked', async () => {
    render(
      <ComponentDrawerFooter
        onClose={onCloseMock}
        actionButton={actionButtonMock}
      />
    );

    const cancelButton = screen.getByRole('button');
    await userEvent.click(cancelButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should render via props', () => {
    render(
      <ComponentDrawerFooter
        onClose={onCloseMock}
        actionButton={() => <p>prop render</p>}
      />
    );

    expect(screen.getByText('prop render')).toBeInTheDocument();
  });

  it('should call onClose to the rendered element', async () => {
    render(
      <ComponentDrawerFooter
        onClose={onCloseMock}
        actionButton={(closeDrawer) => (
          <button onClick={closeDrawer}>prop render</button>
        )}
      />
    );

    const button = screen.getByText('prop render');
    await userEvent.click(button);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
