import { ReactNode } from 'react';

import { Flex } from 'milky-ui';

type TopAreaContainerProps = {
  children: ReactNode;
};

export const TopAreaContainer = ({ children }: TopAreaContainerProps) => {
  return (
    <Flex
      fullHeight
      direction="column"
      py={2}
      bb={1}
      bbStyle="solid"
      bbColor="$gray6"
      css={{ maxHeight: 80 }}
    >
      {children}
    </Flex>
  );
};
