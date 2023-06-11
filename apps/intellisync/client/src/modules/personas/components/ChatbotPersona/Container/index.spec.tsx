import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Container } from '.';

describe('Container', () => {
  it('should render', () => {
    render(<Container>anything</Container>);
    const element = screen.getByText('anything');
    expect(element).toBeInTheDocument();
  });
});
