import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  assertButtonIsInTheDocument,
  assertFunctionIsCalledOnButtonClick,
} from '@odyssey/tests';
import { ModalComponentButtonsArea } from '.';

describe('ModalComponentButtonsArea', () => {
  const onCancel = vi.fn();
  const onConfirm = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render two buttons', () => {
    render(
      <ModalComponentButtonsArea
        confirmButton="Deactivate"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    const buttons = screen.queryAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('should render a cancel button with the correct text', () => {
    render(
      <ModalComponentButtonsArea
        confirmButton="Deactivate"
        cancelButton="Anything"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    assertButtonIsInTheDocument('Anything');
  });

  it('should render a confirm button with the text "Deactivate"', () => {
    render(
      <ModalComponentButtonsArea
        confirmButton="Deactivate"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    assertButtonIsInTheDocument('Deactivate');
  });

  it('should call onCancel when the cancel button is clicked', async () => {
    render(
      <ModalComponentButtonsArea
        confirmButton="Deactivate"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    await assertFunctionIsCalledOnButtonClick('Cancel', onCancel);
  });

  it('should call onConfirm when the confirm button is clicked', async () => {
    render(
      <ModalComponentButtonsArea
        confirmButton="Deactivate"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    await assertFunctionIsCalledOnButtonClick('Deactivate', onConfirm);
  });

  it('should render a cancel button with the text "Cancel" when the cancelButton prop is not provided', () => {
    render(
      <ModalComponentButtonsArea
        confirmButton="Deactivate"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    assertButtonIsInTheDocument('Cancel');
  });
});
