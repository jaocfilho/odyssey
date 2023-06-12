import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { Informality, informalityOptions } from '.';
import { FormInputWrapper } from '@/modules/test-helpers/wrappers';

describe('Informality', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    render(<Informality />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select an informality option');
    expect(element).toBeInTheDocument();
  });

  it('should render the correct options', async () => {
    render(<Informality />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select an informality option');
    await userEvent.click(element);

    informalityOptions.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });
});
