import type { ComponentProps } from '../../utils/types';

import { styled } from '../../styles/stiches';

export const TextElement = styled('p', {
  // css reset
  all: 'unset',

  variants: {
    variant: {
      h1: {
        fontSize: '$6xl',
      },
      h2: {
        fontSize: '$4xl',
      },
      h3: {
        fontSize: '$2xl',
      },
      h4: {
        fontSize: '$xl',
      },
      h5: {
        fontSize: '$lg',
      },
      p: {
        fontSize: '$md',
      },
    },

    fontWeight: {
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
    },

    letterSpacing: {
      tightest: {
        letterSpacing: '$tightest',
      },
      tighter: {
        letterSpacing: '$tighter',
      },
      tight: {
        letterSpacing: '$tight',
      },
      normal: {
        letterSpacing: '$normal',
      },
      wide: {
        letterSpacing: '$wide',
      },
      wider: {
        letterSpacing: '$wider',
      },
      widest: {
        letterSpacing: '$widest',
      },
    },
  },

  defaultVariants: {
    variant: 'p',
    fontWeight: 'regular',
    letterSpacing: 'normal',
  },
});

export type TextElementProps = ComponentProps<typeof TextElement>;
