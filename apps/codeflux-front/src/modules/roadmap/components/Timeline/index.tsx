import { Flex, ScrollArea } from 'milky-ui';

import { mapRange } from 'satellite';

import { TimelineDateCell } from '../TimelineDateCell';

export const Timeline = () => {
  return (
    <Flex
      fullWidth
      css={{
        overflow: 'hidden',
      }}
      onScroll={(e) => handleScroll(e.target.scrollLeft)}
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
