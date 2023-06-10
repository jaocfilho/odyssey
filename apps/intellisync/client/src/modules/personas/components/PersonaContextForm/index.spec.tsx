import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { PersonaContextForm } from '.';

describe('PersonaContextForm', () => {
  const onSubmit = vi.fn();

  afterEach(() => {
    cleanup();
  });

  it('should display a textarea on initial render', () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

  it('should render an add row button', () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const element = screen.getByTestId('addRowButton');
    expect(element).toBeInTheDocument();
  });

  it('should display another textarea when addRow button is clicked', async () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const button = screen.getByTestId('addRowButton');
    await userEvent.click(button);

    const textareas = screen.getAllByRole('textbox');
    expect(textareas).toHaveLength(2);
  });

  it('should not render the remove row button for the first textarea', () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const element = screen.queryByTestId('removeRowButton');
    expect(element).not.toBeInTheDocument();
  });

  it('should render a remove row button for each textarea after the first', async () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const addRowButton = screen.getByTestId('addRowButton');
    await userEvent.click(addRowButton);

    const removeRowButtons = screen.getAllByTestId('removeRowButton');

    const textAreas = screen.getAllByRole('textbox');

    expect(removeRowButtons).toHaveLength(textAreas.length - 1);
  });

  it('should remove a textarea when removeRow button is clicked', async () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const addRowButton = screen.getByTestId('addRowButton');
    await userEvent.click(addRowButton);

    const removeRowButtons = screen.getAllByTestId('removeRowButton');
    await userEvent.click(removeRowButtons[0]);

    const textareas = screen.getAllByRole('textbox');
    expect(textareas).toHaveLength(1);
  });

  it('should render a disabled save button when no fields are dirty', () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const element = screen.getByRole('button', { name: 'Save' });
    expect(element).toBeDisabled();
  });

  it('should render a disabled cancel button when no fields are dirty', () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const element = screen.getByRole('button', { name: 'Cancel' });
    expect(element).toBeDisabled();
  });

  it('should render an enabled save button when fields are dirty', async () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'test');

    const element = screen.getByRole('button', { name: 'Save' });
    expect(element).toBeEnabled();
  });

  it('should reset the textarea content when cancel button is clicked', async () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'test');

    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    await userEvent.click(cancelButton);

    expect(textarea).toHaveValue('');
  });

  it('should call onSubmit when save button is clicked', async () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'test');

    const saveButton = screen.getByRole('button', { name: 'Save' });
    await userEvent.click(saveButton);

    expect(onSubmit).toHaveBeenCalled();
  });

  it('should render a textarea for eachrow in defaultValues', () => {
    const defaultValues = {
      context: [
        {
          value: 'test',
        },
        {
          value: 'test2',
        },
      ],
    };

    render(
      <PersonaContextForm onSubmit={onSubmit} defaultValues={defaultValues} />
    );

    const textareas = screen.getAllByRole('textbox');
    expect(textareas).toHaveLength(2);
  });

  it('should pass a list of strings for each textarea to onSubmit', async () => {
    render(<PersonaContextForm onSubmit={onSubmit} />);

    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'test');

    const saveButton = screen.getByRole('button', { name: 'Save' });
    await userEvent.click(saveButton);

    expect(onSubmit).toHaveBeenCalledWith(['test']);
  });
});
