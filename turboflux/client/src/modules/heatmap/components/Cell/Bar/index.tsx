import { HeatmapCell } from '../../../entities';
import { BarContainer } from './styles';

export type BarProps = HeatmapCell;

export const Bar = ({ color, type }: BarProps) => {
  return (
    <BarContainer
      role="heatmapCellBar"
      cursorPointer
      color={color}
      type={type}
    />
  );
};
