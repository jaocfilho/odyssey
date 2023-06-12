import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Input } from '.';

describe('Input', () => {
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

  it('should assign a name to the input if name is passed', () => {
    render(<Input label="Label" name="name" />);

    const element = screen.getByLabelText('Label');
    expect(element).toHaveAttribute('name', 'name');
  });
});
