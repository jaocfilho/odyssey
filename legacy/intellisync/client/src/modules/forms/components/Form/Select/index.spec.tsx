import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';

import { BaseSelect } from '.';
import { useForm } from 'react-hook-form';

describe('BaseSelect', () => {
  const { result } = renderHook(() => useForm());

  it('should render a select', () => {
    render(
      <BaseSelect
        name="anyName"
        control={result.current.control}
        label="anyLabel"
        options={[]}
      />
    );

    const labelElement = screen.getByLabelText('anyLabel');
    const buttonElement = screen.getByRole('button');
    expect(labelElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
