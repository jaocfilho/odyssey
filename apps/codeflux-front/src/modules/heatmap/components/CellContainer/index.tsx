import type { ReactNode } from 'react';

import { Flex, Css } from 'milky-ui';

import { ROADMAP_CELL_WIDTH } from '../../constants';

type CellContainerProps = {
  children: ReactNode;
  height?: Css['height'];
};

/**
 * This components represents a cell container and it is meant to be used
 * by both timeline and regular cells on the roadmap.
 *
 */
export const CellContainer = ({
  children,
  height = '$space$10',
}: CellContainerProps) => {
  return (
    <Flex noShrink css={{ width: ROADMAP_CELL_WIDTH, height }}>
      {children}
    </Flex>
  );
};
