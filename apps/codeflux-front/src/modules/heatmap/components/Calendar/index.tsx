import { RefObject } from 'react';

import { Flex } from 'milky-ui';

import { mapRange } from 'satellite';

import { CalendarDateCell } from '../CalendarDateCell';

export const Calendar = () => {
  return (
    <Flex>
      {mapRange(
        (index) => (
          <CalendarDateCell key={index} value={`${index}`} />
        ),
        30
      )}
    </Flex>
  );
};
