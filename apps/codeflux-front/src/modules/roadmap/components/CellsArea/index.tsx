import type { UIEvent } from 'react';

import { Flex } from 'milky-ui';

import { generateRoadmapBar } from '../../factories';
import { CellRows } from '../CellRows';

const createFakeRows = () => {
  const purple = generateRoadmapBar({ size: 48, color: 'purple' });
  const crimson = generateRoadmapBar({ size: 72, color: 'crimson' });
  const cyan = generateRoadmapBar({ size: 34, color: 'cyan' });
  const red = generateRoadmapBar({ size: 51, color: 'red' });

  const rows = [
    { cells: purple },
    { cells: crimson },
    { cells: cyan },
    { cells: red },
  ];

  return rows;
};

type CellsAreaProps = {
  changeScrollPosition: (newValue: number) => void;
};

export const CellsArea = ({ changeScrollPosition }: CellsAreaProps) => {
  const rows = createFakeRows();

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const { target } = event;
    changeScrollPosition((target as HTMLDivElement).scrollLeft);
  };

  return (
    <Flex
      fullHeight
      fullWidth
      css={{
        overflow: 'auto',
      }}
      onScroll={handleScroll}
    >
      <CellRows rows={rows} />
    </Flex>
  );
};
