import { Flex } from 'milky-ui';

import { generateRoadmapBar } from '../../factories';
import { Calendar } from '../Calendar';
import { HeatmapGrid } from '../HeatmapGrid';
import { HeatmapSidebar } from '../HeatmapSidebar';

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

export const Heatmap = () => {
  const rows = createFakeRows();

  return (
    <Flex
      autoHorizontalMargin
      css={{
        width: 1440,
        height: 800,
      }}
    >
      <HeatmapSidebar />
      <Flex
        direction="column"
        css={{
          overflow: 'auto',
        }}
      >
        <Calendar />
        <HeatmapGrid rows={rows} columns={30} />
      </Flex>
    </Flex>
  );
};
