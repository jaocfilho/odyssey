import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { Input } from '.';

describe('Input', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render an input', () => {
    render(<Input />);

    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

  it('should render a label', () => {
    render(<Input label="Label" />);

    const element = screen.getByText('Label');
    expect(element).toBeInTheDocument();
  });

  it('should write the value passed to the input', async () => {
    render(<Input />);

    const element = screen.getByRole('textbox');
    await userEvent.type(element, 'test');
    expect(element).toHaveValue('test');
  });

  it('should call onChange when the input value changes', async () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);

    const element = screen.getByRole('textbox');
    await userEvent.type(element, 'test');
    expect(onChange).toHaveBeenCalled();
  });

  it('should assign a name to the input if name is passed', () => {
    render(<Input label="Label" name="name" />);

    const element = screen.getByLabelText('Label');
    expect(element).toHaveAttribute('name', 'name');
  });

  it('should render a helper text', () => {
    render(<Input helperText="Helper text" />);

    const element = screen.getByText('Helper text');
    expect(element).toBeInTheDocument();
  });

  it('should render a red helper text if error is true', () => {
    render(<Input helperText="Helper text" error />);

    const element = screen.getByText('Helper text');
    expect(element).toHaveClass('text-red-600');
  });

  it('should render an svg icon if error is true', () => {
    render(<Input error />);

    const element = screen.getByTestId('error-icon');
    expect(element).toBeInTheDocument();
  });

  it('should not render an svg icon if error is false', () => {
    render(<Input />);

    const element = screen.queryByTestId('error-icon');
    expect(element).not.toBeInTheDocument();
  });

  it('should set the ring color to red if error is true', () => {
    render(<Input error />);

    const element = screen.getByRole('textbox');
    expect(element).toHaveClass('focus:ring-red-600');
  });

  it('should set the ring color to red even if a colorScheme is passed', () => {
    render(<Input colorScheme="emerald" error />);

    const element = screen.getByRole('textbox');
    expect(element).toHaveClass('focus:ring-red-600');
  });

  it('should render a copy icon if hasCopyButton is true', () => {
    render(<Input hasCopyButton />);

    const element = screen.getByTestId('copy-icon');
    expect(element).toBeInTheDocument();
  });

  it('should not render a copy icon if hasCopyButton is false', () => {
    render(<Input />);

    const element = screen.queryByTestId('copy-icon');
    expect(element).not.toBeInTheDocument();
  });

  it('should copy the input value to the clipboard when the copy icon is clicked', async () => {
    const writeText = vi.fn();

    Object.assign(navigator, {
      clipboard: {
        writeText,
      },
    });

    render(<Input hasCopyButton />);

    const textbox = screen.getByRole('textbox');
    await userEvent.type(textbox, 'test');

    const button = screen.getByTestId('copy-icon');
    await userEvent.click(button);

    expect(writeText).toHaveBeenCalledWith('test');
  });
});
