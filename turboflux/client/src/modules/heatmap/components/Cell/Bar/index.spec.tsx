import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { Bar } from '.';
import { createRandomHeatmapCell } from '../../../entities';

describe('Bar', () => {
  it('should render corectly if type is ending', () => {
    const { color, type } = createRandomHeatmapCell({ type: 'ending' });

    render(<Bar color={color} type={type} />);

    expect(screen.getByRole('heatmapCellBar')).toBeInTheDocument();
  });

  it('should render corectly if type is solo', () => {
    const { color, type } = createRandomHeatmapCell({ type: 'solo' });

    render(<Bar color={color} type={type} />);

    expect(screen.getByRole('heatmapCellBar')).toBeInTheDocument();
  });

  it('should render corectly if type is starting', () => {
    const { color, type } = createRandomHeatmapCell({ type: 'starting' });

    render(<Bar color={color} type={type} />);

    expect(screen.getByRole('heatmapCellBar')).toBeInTheDocument();
  });

  it('should render corectly if type is progress', () => {
    const { color, type } = createRandomHeatmapCell({ type: 'progress' });

    render(<Bar color={color} type={type} />);

    expect(screen.getByRole('heatmapCellBar')).toBeInTheDocument();
  });
});
