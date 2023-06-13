import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { Style, styleOptions } from '.';
import { FormInputWrapper } from '@/modules/test-helpers/wrappers';

describe('Style', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    render(<Style />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select a style');
    expect(element).toBeInTheDocument();
  });

  it('should render the correct options', async () => {
    render(<Style />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select a style');
    await userEvent.click(element);

    styleOptions.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });
});
