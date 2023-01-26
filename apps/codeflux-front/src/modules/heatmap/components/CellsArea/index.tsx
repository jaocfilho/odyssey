import { Flex } from 'milky-ui';

import { generateRoadmapBar } from '../../factories';
import { HeatmapColumn } from '../HeatmapColumn';
import { CellRows } from '../CellRows';

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
      <Flex fullHeight fullWidth position="absolute" css={{ zIndex: 10 }}>
        <CellRows rows={rows} />
      </Flex>
      <Flex fullHeight fullWidth position="absolute" css={{ zIndex: 1 }}>
        <HeatmapColumn />
      </Flex>
    </Flex>
  );
};
