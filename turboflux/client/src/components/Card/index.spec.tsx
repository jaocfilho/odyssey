import { render, screen, cleanup } from '@testing-library/react';

import { afterEach, describe, expect, it } from 'vitest';

import { Card } from '.';

describe('Card component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the children prop', () => {
    render(<Card>Test content</Card>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
