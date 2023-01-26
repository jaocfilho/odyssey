import { render } from '@testing-library/react';

import { beforeEach, describe, expect, vi } from 'vitest';

import { HeatmapColumn } from '../HeatmapColumn';
import { HeatmapColumns } from '.';

describe('HeatmapColumns', () => {
  vi.mock('../HeatmapColumn', () => ({
    HeatmapColumn: vi.fn(() => null),
  }));

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render', () => {
    const { container } = render(<HeatmapColumns columns={1} />);
    expect(container).toBeInTheDocument();
  });

  it('should call a HeatmapColumn for each column', () => {
    const columns = 30;

    render(<HeatmapColumns columns={columns} />);
    expect(HeatmapColumn).toHaveBeenCalledTimes(columns);
  });
});
