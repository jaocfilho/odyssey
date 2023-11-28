import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { LanguageComplexity, languageComplexityOptions } from '.';
import { FormInputWrapper } from '@/modules/test-helpers/wrappers';

describe('LanguageComplexity', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    render(<LanguageComplexity />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select a language complexity');
    expect(element).toBeInTheDocument();
  });

  it('should render the correct options', async () => {
    render(<LanguageComplexity />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select a language complexity');
    await userEvent.click(element);

    languageComplexityOptions.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });
});
