import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { Tone, toneOptions } from '.';
import { FormInputWrapper } from '@/modules/test-helpers/wrappers';

describe('Tone', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    render(<Tone />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select a tone');
    expect(element).toBeInTheDocument();
  });

  it('should render the correct options', async () => {
    render(<Tone />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select a tone');
    await userEvent.click(element);

    toneOptions.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });
});
