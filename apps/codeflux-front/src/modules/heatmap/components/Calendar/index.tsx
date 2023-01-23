import { RefObject } from 'react';

import { Flex } from 'milky-ui';

import { mapRange } from 'satellite';

import { CalendarDateCell } from '../CalendarDateCell';

type CalendarProps = {
  scroll: RefObject<HTMLDivElement>;
};

export const Calendar = ({ scroll }: CalendarProps) => {
  return (
    <Flex
      fullWidth
      css={{
        overflow: 'hidden',
      }}
      ref={scroll}
    >
      {mapRange(
        (index) => (
          <CalendarDateCell key={index} value={`Sat ${index}`} />
        ),
        30
      )}
    </Flex>
  );
};
