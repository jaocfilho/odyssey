import type { ComponentProps } from '../../utils/types';

import { ForwardedRef, forwardRef } from 'react';

import { FlexContainer } from './styles';

export type FlexProps = ComponentProps<typeof FlexContainer>;

const BaseFlex = (props: FlexProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <FlexContainer {...props} ref={ref} />;
};

/**
 * `Flex` is a `Box` with display set to flex that
 * comes with helpful shorthand props.
 *
 * It renders a `div` element.
 *
 * #### Shorthand props
 * In addition to using all `Box` props, you can use some specific
 * `Flex` shorthand props
 *
 * - direction?: `"row" | "column"` - flex direction. It defaults to
 * `"row"`.
 *
 * - noShrink: `boolean` - if its `true` sets the flex shrink factor
 * to 0.
 *
 * - noWrap: `boolean` - if its `true` sets the `flex-wrap`
 * property to `"nowrap"`.
 *
 * - gap: `number` - sets the `gap` between the items inside
 * the `Flex`.
 *
 */
export const Flex = forwardRef(BaseFlex);
