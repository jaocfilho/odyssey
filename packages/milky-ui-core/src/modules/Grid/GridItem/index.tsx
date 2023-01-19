import type { ComponentProps } from '../../../utils/types';
import type { Css } from '../../../styles/stiches';

import { ForwardedRef, forwardRef } from 'react';

import { GridItemContainer } from './styles';

export type GridItemProps = ComponentProps<typeof GridItemContainer> &
  Pick<
    Css,
    | 'gridArea'
    | 'gridColumn'
    | 'gridColumnStart'
    | 'gridColumnEnd'
    | 'gridRow'
    | 'gridRowStart'
    | 'gridRowEnd'
  >;

const BaseGridItem = (
  {
    gridArea,
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
    gridRow,
    gridRowStart,
    gridRowEnd,
    css,
    ...rest
  }: GridItemProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const finalCss: Css = {
    gridArea,
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
    gridRow,
    gridRowStart,
    gridRowEnd,
    ...css,
  };

  return <GridItemContainer css={finalCss} {...rest} ref={ref} />;
};

export const GridItem = forwardRef(BaseGridItem);
