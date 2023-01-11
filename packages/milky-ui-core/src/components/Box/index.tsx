import type { ComponentProps } from '../../utils/types';

import {
  createMarginVariants,
  createPaddingVariants,
  createTextColorVariants,
} from '../../utils';

import { styled } from '../../styles/stiches';

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
 * #### Shorthand Props
 * - cursorPointer: `boolean` - changes the `cursor` to `"pointer"`
 *
 * - autoHorizontalMargin: `boolean` - sets the margin x to `"auto"`
 *
 * - padding abbreviations: `number` - you can use any padding
 * abbreviation, like `px` or `pr` as props
 *
 * - margin abbreviations: `number` - you can use any margin
 * abbreviation, `my` or `ml` as props
 *
 */
export const Box = styled('div', {
  // reset
  boxSizing: 'border-box',

  variants: {
    // size variants
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

    // space variants
    ...createPaddingVariants(),
    ...createMarginVariants(),

    autoHorizontalMargin: {
      true: {
        mx: 'auto',
      },
    },

    // text variants
    textAlignCenter: {
      true: {
        textAlign: 'center',
      },
    },

    textJustifyCenter: {
      true: {
        textJustify: 'center',
      },
    },

    textCenter: {
      true: {
        textJustify: 'center',
        textAlign: 'center',
      },
    },

    // text color variants
    ...createTextColorVariants(),

    // color variants
    boxBg: {
      true: {
        bgColor: '$gray3',
      },
    },

    // other variants
    cursorPointer: {
      true: {
        cursor: 'pointer',
      },
    },
  },
});

export type BoxProps = ComponentProps<typeof Box>;
