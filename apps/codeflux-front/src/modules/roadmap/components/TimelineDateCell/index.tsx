import { Flex, Text } from 'milky-ui';

import { CellContainer } from '../CellContainer';

export const TimelineDateCell = () => {
  return (
    <CellContainer>
      <Flex
        fullWidth
        fullHeight
        justifyContent="center"
        alignItems="center"
        lowContrastTextColor="gray"
      >
        <Text>Sat 1</Text>
      </Flex>
    </CellContainer>
  );
};
