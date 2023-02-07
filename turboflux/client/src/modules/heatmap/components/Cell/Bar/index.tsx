import type { THeatmapCell } from '../../../types';

import { BarContainer } from './styles';

export type BarProps = THeatmapCell;

export const Bar = ({ color, type }: BarProps) => {
  return (
    <BarContainer
      role="roadmapCellBar"
      cursorPointer
      color={color}
      type={type}
    />
  );
};
