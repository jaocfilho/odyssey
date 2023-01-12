import { Flex } from 'milky-ui';
import { useEffect, useRef } from 'react';

import { mapRange } from 'satellite';

import { TimelineDateCell } from '../TimelineDateCell';

type TimelineProps = {
  scrollPosition: number;
};

export const Timeline = ({ scrollPosition }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <Flex
      fullWidth
      css={{
        overflow: 'hidden',
      }}
      ref={ref}
    >
      {mapRange(
        (index) => (
          <TimelineDateCell value={`Sat ${index}`} />
        ),
        30
      )}
    </Flex>
  );
};
