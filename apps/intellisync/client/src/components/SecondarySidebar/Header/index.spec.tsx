import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Header } from '.';

describe('Header', () => {
  it('renders header text correctly', () => {
    const headerText = 'Header Text';
    render(<Header header={headerText} />);

    const headerElement = screen.getByText(headerText);
    expect(headerElement).toBeInTheDocument();
  });
});
