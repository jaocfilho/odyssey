import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { AnswerSize, answerSizeOptions } from '.';
import { FormInputWrapper } from '@/modules/test-helpers/wrappers';

describe('AnswerSize', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    render(<AnswerSize />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select an answer size');
    expect(element).toBeInTheDocument();
  });

  it('should render the correct options', async () => {
    render(<AnswerSize />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select an answer size');
    await userEvent.click(element);

    answerSizeOptions.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });
});
