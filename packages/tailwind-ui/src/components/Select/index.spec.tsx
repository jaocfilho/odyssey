import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { Select } from '.';

describe('Select', () => {
  const options = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
  ];

  const handleChange = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render if no label is passed', () => {
    render(<Select value="" options={options} onChange={handleChange} />);

    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  it('should display the label of the selected value', () => {
    render(
      <Select value="option-1" options={options} onChange={handleChange} />
    );

    const element = screen.getByText('Option 1');
    expect(element).toBeInTheDocument();
  });

  it('should display the placeholder if no value is selected', () => {
    render(
      <Select
        value=""
        options={options}
        placeholder="Placeholder"
        onChange={handleChange}
      />
    );

    const element = screen.getByText('Placeholder');
    expect(element).toBeInTheDocument();
  });

  it('should display the options when the button is clicked', async () => {
    render(<Select value="" options={options} onChange={handleChange} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const elements = screen.getAllByRole('option');
    expect(elements).toHaveLength(options.length);
  });

  it('should call the onChange handler when an option is selected', async () => {
    render(<Select value="" options={options} onChange={handleChange} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const option = screen.getByText('Option 1');
    await userEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith('option-1');
  });

  it('should not call the onChange handler when the selected option is clicked', async () => {
    render(
      <Select value="option-1" options={options} onChange={handleChange} />
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const option = screen.getByRole('option', { name: 'Option 1' });
    await userEvent.click(option);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should not update the displayed value if the input is not controlled', async () => {
    render(
      <Select
        value=""
        options={options}
        placeholder="Placeholder"
        onChange={handleChange}
      />
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const option = screen.getByText('Option 1');
    await userEvent.click(option);

    const element = screen.getByText('Placeholder');
    expect(element).toBeInTheDocument();
  });

  it('should update the displayed value if the input is controlled', async () => {
    let value = '';

    handleChange.mockImplementation((option: any) => {
      value = option;
    });

    render(
      <Select
        value={value}
        options={options}
        placeholder="Placeholder"
        onChange={handleChange}
      />
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const option = screen.getByRole('option', { name: 'Option 1' });
    await userEvent.click(option);

    const element = screen.findByRole('button', { name: 'Option 1' });
    waitFor(() => expect(element).toBeInTheDocument());
    waitFor(() => expect(value).toBe('option-1'));
  });
});
