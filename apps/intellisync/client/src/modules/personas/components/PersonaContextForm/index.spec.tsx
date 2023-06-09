import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { PersonaContextForm } from '.';

describe('PersonaContextForm', () => {
  afterEach(() => {
    cleanup();
  });

  it('should display a textarea on initial render', () => {
    render(<PersonaContextForm />);

    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

  it('should render an add row button', () => {
    render(<PersonaContextForm />);

    const element = screen.getByTestId('addRowButton');
    expect(element).toBeInTheDocument();
  });

  it('should display another textarea when addRow button is clicked', async () => {
    render(<PersonaContextForm />);

    const button = screen.getByTestId('addRowButton');
    await userEvent.click(button);

    const textareas = screen.getAllByRole('textbox');
    expect(textareas).toHaveLength(2);
  });

  it('should render a remove row button for each textarea', async () => {
    render(<PersonaContextForm />);

    const addRowButton = screen.getByTestId('addRowButton');
    await userEvent.click(addRowButton);

    const removeRowButtons = screen.getAllByTestId('removeRowButton');

    const textAreas = screen.getAllByRole('textbox');

    expect(removeRowButtons).toHaveLength(textAreas.length);
  });

  it('should remove a textarea when removeRow button is clicked', async () => {
    render(<PersonaContextForm />);

    const addRowButton = screen.getByTestId('addRowButton');
    await userEvent.click(addRowButton);

    const removeRowButtons = screen.getAllByTestId('removeRowButton');
    await userEvent.click(removeRowButtons[0]);

    const textareas = screen.getAllByRole('textbox');
    expect(textareas).toHaveLength(1);
  });

  it('should render a disabled save button when no fields are dirty', () => {
    render(<PersonaContextForm />);

    const element = screen.getByRole('button', { name: 'Save' });
    expect(element).toBeDisabled();
  });

  it('should render a disabled cancel button when no fields are dirty', () => {
    render(<PersonaContextForm />);

    const element = screen.getByRole('button', { name: 'Cancel' });
    expect(element).toBeDisabled();
  });

  it('should render an enabled save button when fields are dirty', async () => {
    render(<PersonaContextForm />);

    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'test');

    const element = screen.getByRole('button', { name: 'Save' });
    expect(element).toBeEnabled();
  });

  it('should reset the textarea content when cancel button is clicked', async () => {
    render(<PersonaContextForm />);

    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'test');

    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    await userEvent.click(cancelButton);

    expect(textarea).toHaveValue('');
  });
});
