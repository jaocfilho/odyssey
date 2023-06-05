import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  assertButtonIsInTheDocument,
  assertFunctionIsCalledOnButtonClick,
} from '@odyssey/tests';
import { ButtonsArea } from '.';

describe('ButtonsArea', () => {
  const cancelUpdate = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render two buttons', () => {
    render(<ButtonsArea cancelUpdate={cancelUpdate} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('should render the cancel button', () => {
    render(<ButtonsArea cancelUpdate={cancelUpdate} />);

    assertButtonIsInTheDocument('Cancel');
  });

  it('should render the save button', () => {
    render(<ButtonsArea cancelUpdate={cancelUpdate} />);

    assertButtonIsInTheDocument('Save');
  });

  it('should call cancelUpdate when the cancel button is clicked', () => {
    render(<ButtonsArea cancelUpdate={cancelUpdate} />);

    assertFunctionIsCalledOnButtonClick('Cancel', cancelUpdate);
  });
});
