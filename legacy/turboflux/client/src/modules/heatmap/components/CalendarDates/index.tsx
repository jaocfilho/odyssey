import { Flex } from 'milky-ui';

import { mapRange } from 'satellite';

import { CalendarDateCell } from '../CalendarDateCell';

export const CalendarDates = () => {
  return (
    <Flex>
      {mapRange(
        (index) => (
          <CalendarDateCell key={index} value={`${index + 1}`} />
        ),
        30
      )}
    </Flex>
  );
};
