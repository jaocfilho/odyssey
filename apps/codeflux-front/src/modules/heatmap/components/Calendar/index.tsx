import { Flex } from 'milky-ui';

import { mapRange } from 'satellite';

import { CalendarDateCell } from '../CalendarDateCell';

export const Calendar = () => {
  return (
    <Flex css={{ bl: 1, blStyle: 'solid', blColor: '$gray6' }}>
      {mapRange(
        (index) => (
          <CalendarDateCell key={index} value={`${index + 1}`} />
        ),
        30
      )}
    </Flex>
  );
};
