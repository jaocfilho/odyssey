import { render } from '@testing-library/react';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { HeatmapGridColumn } from '../HeatmapGridColumn';
import { HeatmapGridColumns } from '.';
import { createRandomHeatmapColumns } from '../../entities';

describe('HeatmapGridColumns', () => {
  vi.mock('../HeatmapGridColumn', () => ({
    HeatmapGridColumn: vi.fn(),
  }));

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should call a HeatmapGridColumn for each column', () => {
    const columns = createRandomHeatmapColumns();

    render(<HeatmapGridColumns columns={columns} />);
    expect(HeatmapGridColumn).toHaveBeenCalledTimes(columns.length);
  });
});
