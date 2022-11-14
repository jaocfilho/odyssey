import type { ComponentProps } from "../../utils/types";

import { styled } from "../../styles/stiches";
import { Box } from "../Box";
import { createGapVariants } from "../../utils"

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
 */
export const Flex = styled(Box, {
  display: "flex",

  variants: {
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
    },

    noWrap: {
      true: {
        flexWrap: "nowrap",
      },
    },

    noShrink: {
      true: {
        flexShrink: 0,
      },
    },

    justifyContent: {
      spaceBetween: {
        justifyContent: "space-between",
      },
    },

    ...createGapVariants(),
  },

  defaultVariants: {
    direction: "row",
  },
});

export type FlexProps = ComponentProps<typeof Flex>;
