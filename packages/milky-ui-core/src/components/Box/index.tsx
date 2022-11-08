import type { ComponentProps } from "../../utils/types";

import { styled } from "../../styles/stiches";

/**
 * Div abstraction.
 *
 */
export const Box = styled("div", {
  variants: {
    textCenter: {
      true: {
        textAlign: "center",
      },
    },

    boxBg: {
      true: {
        bgColor: "$gray3",
      },
    },

    widthScreen: {
      true: {
        wScreen: true,
      },
    },

    heightScreen: {
      true: {
        hScreen: true,
      },
    },

    fullWidth: {
      true: {
        wFull: true,
      },
    },

    fullHeight: {
      true: {
        hFull: true,
      },
    },
  },
});

export type BoxProps = ComponentProps<typeof Box>;