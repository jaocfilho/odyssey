import type { ComponentProps } from '../../utils/types';

import { ForwardedRef, forwardRef } from 'react';

import { GridContainer } from './styles';
import { Css } from '../../styles/stiches';

export type GridProps = ComponentProps<typeof GridContainer> &
  Pick<
    Css,
    | 'gridTemplateColumns'
    | 'gridTemplateRows'
    | 'gridAutoColumns'
    | 'gridAutoRows'
    | 'gridAutoFlow'
    | 'gridGap'
  >;

const BaseGrid = (
  {
    gridTemplateColumns,
    gridAutoColumns,
    gridTemplateRows,
    gridAutoRows,
    gridAutoFlow,
    gridGap,
    css,
    ...rest
  }: GridProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const finalCss: Css = {
    gridTemplateColumns,
    gridAutoColumns,
    gridTemplateRows,
    gridAutoRows,
    gridAutoFlow,
    gridGap,
    ...css,
  };

  return <GridContainer css={finalCss} {...rest} ref={ref} />;
};

export const Grid = forwardRef(BaseGrid);
