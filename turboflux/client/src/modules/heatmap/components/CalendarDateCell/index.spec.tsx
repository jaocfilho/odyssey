import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { CalendarDateCell } from '.';

describe('CalendarDateCell', () => {
  it('should render', () => {
    const value = 'Any';
    render(<CalendarDateCell value={value} />);

    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
