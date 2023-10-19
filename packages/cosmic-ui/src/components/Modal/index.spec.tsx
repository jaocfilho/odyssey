import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal } from '.';

describe('Modal', () => {
  const title = 'any title';
  const message = 'any message';

  const onCancel = vi.fn();
  const onConfirm = vi.fn();
  const onClose = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should call onCancel when the cancel button is clicked', async () => {
    render(
      <Modal
        open={true}
        onClose={onClose}
        title={title}
        message={message}
        confirmButton="Delete"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    await userEvent.click(screen.getByText('Cancel'));

    expect(onCancel).toHaveBeenCalled();
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it('should call onConfirm when the confirm button is clicked', async () => {
    render(
      <Modal
        open={true}
        onClose={onClose}
        title={title}
        message={message}
        confirmButton="Delete"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    await userEvent.click(screen.getByText('Delete'));

    expect(onCancel).not.toHaveBeenCalled();
    expect(onConfirm).toHaveBeenCalled();
  });

  it('should call onClose when the cancel button is clicked', async () => {
    render(
      <Modal
        open={true}
        onClose={onClose}
        title={title}
        message={message}
        confirmButton="Delete"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    await userEvent.click(screen.getByText('Cancel'));

    expect(onClose).toHaveBeenCalled();
  });

  it('should call onClose when the confirm button is clicked', async () => {
    render(
      <Modal
        open={true}
        onClose={onClose}
        title={title}
        message={message}
        confirmButton="Delete"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    await userEvent.click(screen.getByText('Delete'));

    expect(onClose).toHaveBeenCalled();
  });
});
