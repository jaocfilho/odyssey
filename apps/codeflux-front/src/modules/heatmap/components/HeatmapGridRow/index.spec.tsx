import { render } from '@testing-library/react';

import { beforeEach, describe, expect, vi } from 'vitest';

import { CellContainer } from '../CellContainer';
import { HeatmapGridRow } from '.';

describe('HeatmapGridRow', () => {
  vi.mock('../CellContainer', () => ({
    CellContainer: vi.fn(),
  }));

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render', () => {
    const { container } = render(<HeatmapGridRow size={1} />);
    expect(container).toBeInTheDocument();
  });

  it('should call CellContainer times the size of the row', () => {
    const size = 30;

    render(<HeatmapGridRow size={size} />);
    expect(CellContainer).toHaveBeenCalledTimes(size);
  });
});
