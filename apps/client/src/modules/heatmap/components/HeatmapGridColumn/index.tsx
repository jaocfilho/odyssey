import { Flex } from 'milky-ui';

import { CellContainer } from '../CellContainer';

export const HeatmapGridColumn = () => {
  return (
    <CellContainer height="100%">
      <Flex br={1} brStyle="solid" brColor="$gray6" />
    </CellContainer>
  );
};
