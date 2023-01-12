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
  handleScroll: (newValue: number) => void;
};

export const CellsArea = ({ handleScroll }: CellsAreaProps) => {
  const rows = createFakeRows();

  return (
    <Flex
      fullHeight
      fullWidth
      css={{
        overflow: 'auto',
      }}
    >
      <CellRows rows={rows} />
    </Flex>
  );
};
