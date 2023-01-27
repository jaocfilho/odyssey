import { render } from '@testing-library/react';

import { describe, expect } from 'vitest';

import { HeatmapGridColumn } from '.';

describe('HeatmapGridColumn', () => {
  it('should render', () => {
    const { container } = render(<HeatmapGridColumn />);
    expect(container).toBeInTheDocument();
  });
});
