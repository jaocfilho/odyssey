import { Flex } from 'milky-ui';

import { CalendarDates } from '../CalendarDates';
import { CalendarMonth } from '../CalendarMonth';

export const Calendar = () => {
  return (
    <Flex
      direction="column"
      py={2}
      gap={1}
      css={{ bl: 1, blStyle: 'solid', blColor: '$gray6' }}
    >
      <Flex ml={4}>
        <Flex position="sticky" css={{ left: 0 }}>
          <CalendarMonth month="December" />
        </Flex>
      </Flex>
      <CalendarDates />
    </Flex>
  );
};
