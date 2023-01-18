import { render, screen } from '@testing-library/react';

import { describe, expect } from 'vitest';

import { TimelineDateCell } from '.';

describe('TImelineDateCell', () => {
  it('should render', () => {
    const value = 'Any';
    render(<TimelineDateCell value={value} />);

    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
