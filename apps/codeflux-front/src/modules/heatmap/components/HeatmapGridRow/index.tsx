import { Flex } from 'milky-ui';

import { CellContainer } from '../CellContainer';

type HeatmapGridRowProps = {
  size: number;
};

export const HeatmapGridRow = ({ size }: HeatmapGridRowProps) => {
  const sizeMapper = [...new Array(size)];

  return (
    <Flex bb={1} bbStyle="solid" bbColor="$gray6">
      {sizeMapper.map((_, index) => (
        <CellContainer key={index}>
          <Flex />
        </CellContainer>
      ))}
    </Flex>
  );
};
