import type { TRoadmapCell } from "../../../types";

import { BarContainer } from "./styles";

export type BarProps = TRoadmapCell;

export const Bar = ({ color, type }: BarProps) => {
  return (
    <BarContainer
      role="roadmapCellBar"
      my={2}
      cursorPointer
      color={color}
      type={type}
    />
  );
};
