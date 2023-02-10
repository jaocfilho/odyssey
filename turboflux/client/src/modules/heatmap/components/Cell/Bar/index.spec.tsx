import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { Bar } from '.';

import { generateRoadmapCell } from '../../../factories';

describe('Bar', () => {
  it('should render corectly if type is not empty', () => {
    const { color, type } = generateRoadmapCell({ excludedTypes: ['empty'] });

    render(<Bar color={color} type={type} />);

    expect(screen.getByRole('heatmapCellBar')).toBeInTheDocument();
  });

  // it("should not render if type is empty", () => {
  //   const { color } = generateRoadmapCell();

  //   render(<Bar color={color} type="empty" />);

  //   expect(screen.getByRole("roadmapCellBar")).not.toBeInTheDocument();
  // });
});
