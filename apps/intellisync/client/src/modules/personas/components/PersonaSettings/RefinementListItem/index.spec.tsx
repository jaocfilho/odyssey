import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RefinementListItem } from '.';

describe('RefinementListItem', () => {
  it('renders field correctly', () => {
    const field = 'Field';
    render(<RefinementListItem field={field} value="" />);
    const fieldElement = screen.getByText(field);
    expect(fieldElement).toBeInTheDocument();
  });

  it('renders value correctly', () => {
    const value = 'Value';
    render(<RefinementListItem field="" value={value} />);
    const valueElement = screen.getByText(value);
    expect(valueElement).toBeInTheDocument();
  });
});
