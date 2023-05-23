import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Mock, expect } from 'vitest';

export const clickButton = async (name: string) => {
  await userEvent.click(screen.getByRole('button', { name }));
};

/**
 * Asserts that a button with the specified name is in the document.
 *
 * @param name - The name of the button.
 */
export const assertButtonIsInTheDocument = (name: string) => {
  expect(screen.getByRole('button', { name })).toBeInTheDocument();
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
