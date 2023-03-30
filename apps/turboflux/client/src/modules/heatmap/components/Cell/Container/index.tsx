import type { ReactNode } from 'react';

import { HeatmapGridCellContainer } from '../../HeatmapGridCellContainer';

type ContainerProps = {
  children: ReactNode;
};

/**
 * The external container of a roadmap cell.
 */
export const Container = ({ children }: ContainerProps) => {
  return <HeatmapGridCellContainer>{children}</HeatmapGridCellContainer>;
};
