import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { LevelOfDetail, levelOfDetailOptions } from '.';
import { FormInputWrapper } from '@/modules/test-helpers/wrappers';

describe('LevelOfDetail', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    render(<LevelOfDetail />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select a level of detail');
    expect(element).toBeInTheDocument();
  });

  it('should render the correct options', async () => {
    render(<LevelOfDetail />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Select a level of detail');
    await userEvent.click(element);

    levelOfDetailOptions.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });
});
