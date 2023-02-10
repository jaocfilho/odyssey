import { Flex } from 'milky-ui';
import { createRandomHeatmapColumns } from '../../entities';

import { generateHeatmapRow } from '../../factories';
import { Calendar } from '../Calendar';
import { HeatmapContextProvider } from '../HeatmapContextProvider';
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

const HeatmapBase = () => {
  const rows = createFakeRows();

  const columns = createRandomHeatmapColumns();

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
        <HeatmapGrid rows={rows} columns={columns} />
      </Flex>
    </Flex>
  );
};

export const Heatmap = () => {
  return (
    <HeatmapContextProvider>
      <HeatmapBase />
    </HeatmapContextProvider>
  );
};
