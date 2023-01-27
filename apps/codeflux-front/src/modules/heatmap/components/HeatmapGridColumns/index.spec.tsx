import { render } from '@testing-library/react';

import { beforeEach, describe, expect, vi } from 'vitest';

import { HeatmapGridColumn } from '../HeatmapGridColumn';
import { HeatmapGridColumns } from '.';

describe('HeatmapGridColumns', () => {
  vi.mock('../HeatmapGridColumn', () => ({
    HeatmapGridColumn: vi.fn(),
  }));

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render', () => {
    const { container } = render(<HeatmapGridColumns columns={1} />);
    expect(container).toBeInTheDocument();
  });

  it('should call a HeatmapGridColumn for each column', () => {
    const columns = 30;

    render(<HeatmapGridColumns columns={columns} />);
    expect(HeatmapGridColumn).toHaveBeenCalledTimes(columns);
  });
});
