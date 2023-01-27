import { Flex } from 'milky-ui';

import { CalendarDates } from '../CalendarDates';
import { CalendarMonth } from '../CalendarMonth';
import { TopAreaContainer } from '../TopAreaContainer';

export const Calendar = () => {
  return (
    <TopAreaContainer>
      <Flex ml={4}>
        <Flex position="sticky" css={{ left: 0 }}>
          <CalendarMonth month="December" />
        </Flex>
      </Flex>
      <CalendarDates />
    </TopAreaContainer>
  );
};
