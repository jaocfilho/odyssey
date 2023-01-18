import type { ReactNode } from 'react';

import { CellContainer } from '../../CellContainer';

type ContainerProps = {
  children: ReactNode;
};

/**
 * The external container of a roadmap cell.
 */
export const Container = ({ children }: ContainerProps) => {
  return <CellContainer height="$space$10">{children}</CellContainer>;
};
