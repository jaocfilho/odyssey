import { render } from '@testing-library/react';

import { beforeEach, describe, vi, it, expect } from 'vitest';

import { Cell } from '../Cell';
import { HeatmapGridRow } from '.';
import { generateRoadmapBar } from '../../factories';

vi.mock('../Cell', () => ({
  Cell: vi.fn(),
}));

describe('HeatmapRow', () => {
  const cells = generateRoadmapBar({ size: 5, color: 'purple' });

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render', () => {
    const { container } = render(<HeatmapGridRow cells={cells} />);

    expect(container).toBeInTheDocument();
  });

  it('should call Cell for each cell', () => {
    render(<HeatmapGridRow cells={cells} />);

    expect(Cell).toHaveBeenCalledTimes(cells.length);
  });
});
