import { render } from '@testing-library/react';

import { beforeEach, describe, expect, vi } from 'vitest';

import { HeatmapGridRow } from '../HeatmapGridRow';
import { HeatmapGridRows } from '.';
import { generateRoadmapBar, generateRoadmapRow } from '../../factories';

describe('HeatmapGridRows', () => {
  vi.mock('../HeatmapGridRow', () => ({
    HeatmapGridRow: vi.fn(),
  }));

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render', () => {
    const { container } = render(<HeatmapGridRows rows={[]} />);
    expect(container).toBeInTheDocument();
  });

  it('should call HeatmapGridRow times the size of the row', () => {
    const rows = generateRoadmapRow();

    render(<HeatmapGridRows rows={rows} />);
    expect(HeatmapGridRow).toHaveBeenCalledTimes(rows.length);
  });
});
