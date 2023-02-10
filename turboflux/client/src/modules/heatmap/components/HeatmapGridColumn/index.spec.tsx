import { render } from '@testing-library/react';

import { beforeEach, describe, expect, vi } from 'vitest';

import { Cell } from '../Cell';
import { HeatmapGridColumn } from '.';
import { createRandomHeatmapCells } from '../../entities';

vi.mock('../Cell', () => ({
  Cell: vi.fn(),
}));

describe('HeatmapGridColumn', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should render', () => {
    const cells = createRandomHeatmapCells();
    const { container } = render(<HeatmapGridColumn cells={cells} />);

    expect(container).toBeInTheDocument();
  });

  it('should call `Cell` for each cell object', () => {
    const cells = createRandomHeatmapCells();
    render(<HeatmapGridColumn cells={cells} />);

    expect(Cell).toHaveBeenCalledTimes(cells.length);
  });
});
