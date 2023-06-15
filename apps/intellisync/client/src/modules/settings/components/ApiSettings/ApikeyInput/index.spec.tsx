import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { ApikeyInput } from '.';

describe('ApikeyInput', () => {
  const value = 'any';

  afterEach(() => {
    cleanup();
  });

  it('should render the value', () => {
    render(<ApikeyInput value={value} />);

    const textbox = screen.getByLabelText('API key');
    expect(textbox).toHaveValue(value);
  });

  it('should render the correct label', () => {
    render(<ApikeyInput value={value} />);

    const textbox = screen.getByLabelText('API key');
    expect(textbox).toBeInTheDocument();
  });

  it('should render the copy button', () => {
    render(<ApikeyInput value={value} />);

    const copyButton = screen.getByTestId('copy-icon');
    expect(copyButton).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(<ApikeyInput value={value} />);

    const textbox = screen.getByLabelText('API key');
    expect(textbox).toBeDisabled();
  });
});
