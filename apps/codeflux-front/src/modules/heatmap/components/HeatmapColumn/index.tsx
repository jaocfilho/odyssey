import { Flex } from 'milky-ui';

import { CellContainer } from '../CellContainer';

export const HeatmapColumn = () => {
  return (
    <CellContainer height="100%">
      <Flex fullWidth fullHeight br={1} brStyle="solid" brColor="$gray6" />
    </CellContainer>
  );
};
