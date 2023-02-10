import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { HeatmapGridCellContainer } from '.';

describe('HeatmapGridCellContainer', () => {
  it('should render', () => {
    render(<HeatmapGridCellContainer>test</HeatmapGridCellContainer>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
