import type { ComponentProps } from '../../utils/types';

import { ForwardedRef, forwardRef } from 'react';

import { GridContainer } from './styles';
import { Css } from '../../styles/stiches';

export type GridProps = ComponentProps<typeof GridContainer> & {
  gridTemplateColumns?: Css['gridTemplateColumns'];
  gridTemplateRows?: Css['gridTemplateRows'];
};

const BaseGrid = (
  { gridTemplateColumns, gridTemplateRows, css, ...rest }: GridProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const finalCss: Css = { gridTemplateColumns, gridTemplateRows, ...css };

  return <GridContainer css={finalCss} {...rest} ref={ref} />;
};

export const Grid = forwardRef(BaseGrid);
