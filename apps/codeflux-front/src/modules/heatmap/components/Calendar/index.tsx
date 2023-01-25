import { Flex } from 'milky-ui';

import { mapRange } from 'satellite';

import { CalendarDateCell } from '../CalendarDateCell';
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
      <Flex>
        {mapRange(
          (index) => (
            <CalendarDateCell key={index} value={`${index + 1}`} />
          ),
          30
        )}
      </Flex>
    </Flex>
  );
};
