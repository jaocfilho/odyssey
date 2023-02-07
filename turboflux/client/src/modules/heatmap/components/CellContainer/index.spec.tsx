import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { CellContainer } from '.';

describe('CellContainer', () => {
  it('should render', () => {
    render(<CellContainer>test</CellContainer>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
