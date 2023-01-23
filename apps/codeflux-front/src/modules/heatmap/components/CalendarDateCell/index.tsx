import { Flex, Text } from 'milky-ui';

import { CellContainer } from '../CellContainer';

type TimelineDateCellProps = {
  value: string;
};

export const CalendarDateCell = ({ value }: TimelineDateCellProps) => {
  return (
    <CellContainer>
      <Flex
        fullWidth
        fullHeight
        justifyContent="center"
        alignItems="center"
        lowContrastTextColor="gray"
      >
        <Text>{value}</Text>
      </Flex>
    </CellContainer>
  );
};
