import type { ComponentProps } from "../../utils/types";

import { styled } from "../../styles/stiches";
import { Box } from "../Box";

/**
 * Flex is Box with display set to flex and
 * comes with helpful style shorthand.
 *
 * It renders a `div` element.
 *
 * Using the Flex components, here are some helpful shorthand props:
 * - You can change it's flexDirection via `direction` prop
 * - You can pass a `noWrap` prop instead of `flexWrap: "nowrap"`
 * - You can pass a `noShrink` prop instead of `flexShrink: 0`
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