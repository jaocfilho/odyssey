import type { ReactNode } from 'react';

import { Flex, Css } from 'milky-ui';

import { HEATMAP_CELL_HEIGHT, HEATMAP_CELL_WIDTH } from '../../constants';

type CellContainerProps = {
  children: ReactNode;
  height?: Css['height'];
  width?: Css['width'];
};

/**
 * This components is used to keep space consistency between
 * different components on the heatmap.
 *
 */
export const CellContainer = ({
  children,
  height = HEATMAP_CELL_HEIGHT,
  width = HEATMAP_CELL_WIDTH,
}: CellContainerProps) => {
  return (
    <Flex noShrink css={{ width, height }}>
      {children}
    </Flex>
  );
};
