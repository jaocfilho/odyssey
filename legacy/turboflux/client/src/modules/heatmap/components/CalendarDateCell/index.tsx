import { Flex, Text } from 'milky-ui';

import { HeatmapGridCellContainer } from '../HeatmapGridCellContainer';

type TimelineDateCellProps = {
  value: string;
};

export const CalendarDateCell = ({ value }: TimelineDateCellProps) => {
  return (
    <HeatmapGridCellContainer>
      <Flex
        fullWidth
        justifyContent="center"
        alignItems="center"
        lowContrastTextColor="gray"
      >
        <Text>{value}</Text>
      </Flex>
    </HeatmapGridCellContainer>
  );
};
