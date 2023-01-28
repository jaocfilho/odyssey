import { ReactNode } from 'react';

import { Flex } from 'milky-ui';
import { HEATMAP_GRID_BORDER_BOTTOM } from '../../constants';

type TopAreaContainerProps = {
  children: ReactNode;
  border?: boolean;
};

export const TopAreaContainer = ({
  children,
  border = false,
}: TopAreaContainerProps) => {
  const borderConfig = border ? HEATMAP_GRID_BORDER_BOTTOM : undefined;

  return (
    <Flex
      fullHeight
      fullWidth
      direction="column"
      justifyContent="end"
      {...borderConfig}
      css={{ maxHeight: 92 }}
    >
      {children}
    </Flex>
  );
};
