import { mapRange } from 'satellite';
import { TCellsRow } from '../../types';
import { generateRoadmapBar, GenerateRoadmapBarParams } from '../roadmapBar';

type GenerateRoadmapRowParams = {
  size?: number;
  barProps?: GenerateRoadmapBarParams;
};

export const generateRoadmapRow = ({
  size = 5,
  barProps = { size: 5, color: 'purple' },
}: GenerateRoadmapRowParams = {}): TCellsRow[] => {
  const rows = mapRange(() => {
    const cells = generateRoadmapBar(barProps);
    return { cells };
  }, size);

  return rows as TCellsRow[];
};
