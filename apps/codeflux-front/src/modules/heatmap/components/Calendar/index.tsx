import { Flex } from 'milky-ui';

import { CalendarDates } from '../CalendarDates';
import { CalendarMonth } from '../CalendarMonth';
import { TopAreaContainer } from '../TopAreaContainer';

export const Calendar = () => {
  return (
    <TopAreaContainer>
      <Flex mb={4}>
        <Flex pl={4} position="sticky" css={{ left: 0 }}>
          <CalendarMonth month="December" />
        </Flex>
      </Flex>
      <CalendarDates />
    </TopAreaContainer>
  );
};
