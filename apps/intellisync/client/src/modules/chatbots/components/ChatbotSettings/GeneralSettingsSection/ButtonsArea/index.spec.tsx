import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  assertButtonIsInTheDocument,
  assertFunctionIsCalledOnButtonClick,
} from '@odyssey/tests';
import { ButtonsArea } from '.';

describe('ButtonsArea', () => {
  const onCancel = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render two buttons', () => {
    render(<ButtonsArea onCancel={onCancel} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('should render the cancel button', () => {
    render(<ButtonsArea onCancel={onCancel} />);

    assertButtonIsInTheDocument('Cancel');
  });

  it('should render the save button', () => {
    render(<ButtonsArea onCancel={onCancel} />);

    assertButtonIsInTheDocument('Save');
  });

  it('should call onCancel when the cancel button is clicked', () => {
    render(<ButtonsArea onCancel={onCancel} />);

    assertFunctionIsCalledOnButtonClick('Cancel', onCancel);
  });

  it('should disable both buttons if disabled is true', () => {
    render(<ButtonsArea onCancel={onCancel} disabled />);

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });
});
