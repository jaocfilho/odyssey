import type { ComponentProps } from '../../utils/types';

import { ForwardedRef, forwardRef } from 'react';

import { GridContainer } from './styles';
import { Css } from '../../styles/stiches';

export * from './GridItem';

export type GridProps = ComponentProps<typeof GridContainer> &
  Pick<
    Css,
    | 'gridTemplateColumns'
    | 'gridAutoColumns'
    | 'gridColumnGap'
    | 'gridTemplateRows'
    | 'gridAutoRows'
    | 'gridRowGap'
    | 'gridAutoFlow'
    | 'gridGap'
  > & {
    columns?: number;
  };

const BaseGrid = (
  {
    columns,
    gridTemplateColumns = 'repeat(12, 1fr)',
    gridAutoColumns,
    gridColumnGap,
    gridTemplateRows,
    gridAutoRows,
    gridRowGap,
    gridAutoFlow,
    gridGap,
    css,
    ...rest
  }: GridProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  if (columns) {
    gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }

  const finalCss: Css = {
    gridTemplateColumns,
    gridAutoColumns,
    gridColumnGap,
    gridTemplateRows,
    gridAutoRows,
    gridRowGap,
    gridAutoFlow,
    gridGap,
    ...css,
  };

  return <GridContainer css={finalCss} {...rest} ref={ref} />;
};

export const Grid = forwardRef(BaseGrid);
