import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import { useForm } from 'react-hook-form';

import { Form } from '../../Form';
import { SelectInput } from '.';

describe('SelectInput', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ];
  const label = 'Test input';
  const name = 'testField';

  afterEach(() => {
    cleanup();
  });

  it('should render a select', () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={console.log} {...methods}>
        <SelectInput label={label} name={name} options={options} />
      </Form.Root>
    );

    const element = screen.getByLabelText(label);
    expect(element).toBeInTheDocument();
  });

  it('should render a select with options', async () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={console.log} {...methods}>
        <SelectInput label={label} name={name} options={options} />
      </Form.Root>
    );

    const element = screen.getByLabelText(label);
    await userEvent.click(element);

    const optionsElements = screen.getAllByRole('option');
    expect(optionsElements).toHaveLength(options.length);
  });

  it('should render a select with a default value', async () => {
    const { result } = renderHook(() =>
      useForm({
        defaultValues: {
          testField: options[1].value,
        },
      })
    );

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={console.log} {...methods}>
        <SelectInput label={label} name={name} options={options} />
      </Form.Root>
    );

    const element = screen.getByText(options[1].label);
    expect(element).toBeInTheDocument();
  });

  it('should change the value of the field when an option is selected', async () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={console.log} {...methods}>
        <SelectInput label={label} name={name} options={options} />
      </Form.Root>
    );

    const element = screen.getByLabelText(label);
    await userEvent.click(element);

    const option = screen.getByText(options[1].label);
    await userEvent.click(option);

    const value = methods.getValues('testField');
    expect(value).toBe(options[1].value);
  });

  it('should reset the selected option when the form is reset', async () => {
    const { result } = renderHook(() =>
      useForm({
        defaultValues: {
          testField: options[1].value,
        },
      })
    );

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={console.log} {...methods}>
        <SelectInput label={label} name={name} options={options} />
      </Form.Root>
    );

    const element = screen.getByLabelText(label);
    await userEvent.click(element);

    const option = screen.getByText(options[0].label);
    await userEvent.click(option);

    methods.reset();

    const value = methods.getValues('testField');
    expect(value).toBe(options[1].value);
  });

  it('should change the selected option if the value is changed with setValue', async () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={console.log} {...methods}>
        <SelectInput label={label} name={name} options={options} />
      </Form.Root>
    );

    methods.setValue('testField', options[1].value);

    const element = await screen.findByText(options[1].label);

    expect(element).toBeInTheDocument();
  });
});
