import { render } from '@testing-library/react';

import { beforeEach, describe, expect, vi } from 'vitest';

import { HeatmapGridRow } from '../HeatmapGridRow';
import { HeatmapGridRows } from '.';

describe('HeatmapGridRows', () => {
  vi.mock('../HeatmapGridRow', () => ({
    HeatmapGridRow: vi.fn(),
  }));

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render', () => {
    const { container } = render(<HeatmapGridRows columns={1} rows={1} />);
    expect(container).toBeInTheDocument();
  });

  it('should call HeatmapGridRow times the size of the row', () => {
    const columns = 30;
    const rows = 4;

    render(<HeatmapGridRows columns={columns} rows={rows} />);
    expect(HeatmapGridRow).toHaveBeenCalledTimes(rows);
  });
});
