import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { BaseSelectOption } from '.';

describe('SelectOption', () => {
  afterEach(() => {
    cleanup();
  });

  it('should display the selectedItem label', () => {
    render(
      <BaseSelectOption
        active
        isSelected
        selectedItem={{ label: 'anyLabel', value: 'anyValue' }}
      />
    );

    const element = screen.getByText('anyLabel');
    expect(element).toBeInTheDocument();
  });

  it('should have semibold font if isSelected', () => {
    render(
      <BaseSelectOption
        active
        isSelected
        selectedItem={{ label: 'anyLabel', value: 'anyValue' }}
      />
    );

    const element = screen.getByText('anyLabel');
    expect(element).toHaveClass('font-semibold');
  });

  it('should have normal font if isSelected is false', () => {
    render(
      <BaseSelectOption
        active
        isSelected={false}
        selectedItem={{ label: 'anyLabel', value: 'anyValue' }}
      />
    );

    const element = screen.getByText('anyLabel');
    expect(element).toHaveClass('font-normal');
  });
});
