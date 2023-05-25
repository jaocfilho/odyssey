import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Header } from '.';

describe('Header', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders header text correctly', () => {
    render(<Header />);
    const headerText = screen.getByText('Application refinement');
    expect(headerText).toBeInTheDocument();
  });

  it('renders description text correctly', () => {
    render(<Header />);
    const descriptionText = screen.getByText(
      'Refinement data increases the total tokens in each request.'
    );
    expect(descriptionText).toBeInTheDocument();
  });
});
