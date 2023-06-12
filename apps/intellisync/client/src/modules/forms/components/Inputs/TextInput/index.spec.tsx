import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import { useForm } from 'react-hook-form';

import { Form } from '../../Form';
import { TextInput } from '.';

describe('TextInput', () => {
  const label = 'Test input';
  const name = 'testField';

  const onSubmit = vi.fn();

  afterEach(() => {
    cleanup();
  });

  it('should render a text input', () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={onSubmit} {...methods}>
        <TextInput label={label} name={name} />
      </Form.Root>
    );

    const element = screen.getByLabelText('Test input');
    expect(element).toBeInTheDocument();
  });

  it('should render a text input with a default value', () => {
    const { result } = renderHook(() =>
      useForm({
        defaultValues: {
          testField: 'test',
        },
      })
    );

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={onSubmit} {...methods}>
        <TextInput label={label} name={name} />
      </Form.Root>
    );

    const element = screen.getByLabelText('Test input');
    expect(element).toHaveValue('test');
  });

  it('should render a text input with a placeholder', () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={onSubmit} {...methods}>
        <TextInput label={label} name={name} placeholder="Test placeholder" />
      </Form.Root>
    );

    const element = screen.getByLabelText('Test input');
    expect(element).toHaveAttribute('placeholder', 'Test placeholder');
  });

  it('should correctly register the field', async () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={onSubmit} {...methods}>
        <TextInput label={label} name={name} />
      </Form.Root>
    );

    const element = screen.getByLabelText('Test input');
    await userEvent.type(element, 'test');

    const value = methods.getValues(name);
    expect(value).toBe('test');
  });

  it('should render a text input with an error', async () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;

    render(
      <Form.Root id="testForm" onSubmit={onSubmit} {...methods}>
        <TextInput label={label} name={name} />
      </Form.Root>
    );

    methods.setError(name, {
      type: 'test',
      message: 'test error message',
    });

    const element = await screen.findByRole('alert');
    expect(element).toBeInTheDocument();
  });

  it('should render a text input with a custom error message', async () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;

    render(
      <Form.Root id="testForm" onSubmit={onSubmit} {...methods}>
        <TextInput label={label} name={name} />
      </Form.Root>
    );

    methods.setError(name, {
      type: 'test',
      message: 'test error message',
    });

    const element = await screen.findByText('test error message');
    expect(element).toBeInTheDocument();
  });

  it('should render without label', () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={onSubmit} {...methods}>
        <TextInput name={name} />
      </Form.Root>
    );

    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

  it('should reset the field', async () => {
    const { result } = renderHook(() => useForm());

    const methods = result.current;
    render(
      <Form.Root id="testForm" onSubmit={onSubmit} {...methods}>
        <TextInput label={label} name={name} />
      </Form.Root>
    );

    const element = screen.getByLabelText('Test input');
    await userEvent.type(element, 'test');

    expect(methods.getValues(name)).toBe('test');

    methods.reset();

    expect(methods.getValues(name)).toBe(undefined);
  });

  it('should only render if the select is inside the form root', () => {
    expect(() =>
      render(<TextInput label={label} name={name} />)
    ).toThrowError();
  });
});
