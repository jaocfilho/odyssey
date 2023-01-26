import { Flex } from 'milky-ui';

import { generateRoadmapBar } from '../../factories';
import { HeatmapColumn } from '../HeatmapColumn';
import { HeatmapColumns } from '../HeatmapColumns';
import { HeatmapRows } from '../HeatmapRows';

const createFakeRows = () => {
  const purple = generateRoadmapBar({ size: 14, color: 'purple' });
  const crimson = generateRoadmapBar({ size: 22, color: 'crimson' });
  const cyan = generateRoadmapBar({ size: 24, color: 'cyan' });
  const red = generateRoadmapBar({ size: 7, color: 'red' });

  const rows = [
    { cells: purple },
    { cells: crimson },
    { cells: cyan },
    { cells: red },
  ];

  return rows;
};

export const CellsArea = () => {
  const rows = createFakeRows();

  return (
    <Flex fullHeight fullWidth position="relative">
      <Flex fullHeight fullWidth position="absolute">
        <HeatmapRows rows={rows} />
      </Flex>
      <HeatmapColumns columns={30} />
    </Flex>
  );
};
