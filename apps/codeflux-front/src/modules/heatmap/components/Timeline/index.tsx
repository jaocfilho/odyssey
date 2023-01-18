import { RefObject } from 'react';

import { Flex } from 'milky-ui';

import { mapRange } from 'satellite';

import { TimelineDateCell } from '../TimelineDateCell';

type TimelineProps = {
  scroll: RefObject<HTMLDivElement>;
};

export const Timeline = ({ scroll }: TimelineProps) => {
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
          <TimelineDateCell key={index} value={`Sat ${index}`} />
        ),
        30
      )}
    </Flex>
  );
};
