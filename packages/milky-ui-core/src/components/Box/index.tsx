import type { ComponentProps } from "../../utils/types";

import { createPaddingVariants } from "../../utils";

import { styled } from "../../styles/stiches";

/**
 * `Box` is an abstraction for the `div` element.
 *
 * Using the `Box` component, here are some helpful shorthand props:
 * - You can pass a `textCenter` boolean prop instead of `textAlign: "center"`
 * - You can use the `widthScreen` boolean prop when you want to use the entire
 * view width.
 * - You can use the `heightScreen` boolean prop when you want to use the entire
 * view height.
 * - You can use the `fullWidth` boolean prop when you want to use the entire
 * available width.
 * - You can use the `fullHeight` boolean prop when you want to use the entire
 * available heigth.
 * - You can pass a `boxBg` boolean prop when you want it to have the
 * default app background color. This is helpfull when you want to build
 * widget or card components.
 *
 * #### Props
 * - cursorPointer: `boolean` - changes the `cursor` to `"pointer"`
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

    cursorPointer: {
      true: {
        cursor: "pointer",
      },
    },

    ...createPaddingVariants(),
  },
});

export type BoxProps = ComponentProps<typeof Box>;
