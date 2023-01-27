import { Flex } from 'milky-ui';

import { generateRoadmapBar } from '../../factories';
import { HeatmapGridColumns } from '../HeatmapGridColumns';
import { HeatmapGridRows } from '../HeatmapGridRows';
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

export const HeatmapGrid = () => {
  const rows = createFakeRows();

  return (
    <Flex fullHeight fullWidth position="relative">
      <HeatmapRows rows={rows} />
      <HeatmapGridRows rows={rows.length} columns={30} />
      <HeatmapGridColumns columns={30} />
    </Flex>
  );
};
