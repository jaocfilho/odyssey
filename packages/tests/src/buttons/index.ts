import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Mock, expect } from 'vitest';

export const clickButton = async (name: string) => {
  await userEvent.click(screen.getByRole('button', { name }));
};

type AssertButtonIsInTheDocumentOptions = {
  disabled?: boolean;
};

/**
 * Asserts that a button with the specified name is in the document.
 *
 * @param name - The name of the button.
 * @param options - The options for the assertion.
 */
export const assertButtonIsInTheDocument = (
  name: string,
  options?: AssertButtonIsInTheDocumentOptions
) => {
  const button = screen.getByRole('button', { name });

  expect(button).toBeInTheDocument();

  if (options?.disabled) {
    expect(button).toBeDisabled();
  }
};

/**
 * Asserts that a given function is called when a button with the specified name is clicked.
 *
 * @param name - The name of the button.
 * @param onClick - The function to be tested for being called when the button is clicked.
 */
export const assertFunctionIsCalledOnButtonClick = async (
  name: string,
  onClick: Mock<any[], any>
) => {
  await clickButton(name);

  expect(onClick).toHaveBeenCalled();
};
