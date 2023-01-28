import { Flex } from 'milky-ui';

import { generateHeatmapRow } from '../../factories';
import { Calendar } from '../Calendar';
import { HeatmapGrid } from '../HeatmapGrid';
import { HeatmapSidebar } from '../HeatmapSidebar';

const createFakeRows = () => {
  const purple = generateHeatmapRow();
  const crimson = generateHeatmapRow({ color: 'crimson' });
  const cyan = generateHeatmapRow({ color: 'cyan' });
  const red = generateHeatmapRow({ color: 'red' });

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
