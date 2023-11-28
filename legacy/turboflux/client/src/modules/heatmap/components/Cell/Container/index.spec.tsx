import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { Container } from '.';

describe('Container', () => {
  it('should render', () => {
    render(<Container>test</Container>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
