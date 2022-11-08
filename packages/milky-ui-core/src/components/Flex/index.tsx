import type { ComponentProps } from "../../utils/types";

import { styled } from "../../styles/stiches";
import { Box } from "../Box";

/**
 * `Flex` is a `Box` with display set to flex and
 * comes with helpful style shorthand.
 *
 * It renders a `div` element.
 *
 * Using the `Flex` component, here are some helpful shorthand props:
 * - You can change it's flexDirection via `direction` prop
 * - You can pass a `noWrap` boolean prop instead of `flexWrap: "nowrap"`
 * - You can pass a `noShrink` boolean prop instead of `flexShrink: 0`
 *
 * You can also use all the `Box` component shorthands.
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
  },

  defaultVariants: {
    direction: "row",
  },
});

export type FlexProps = ComponentProps<typeof Flex>;
