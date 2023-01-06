import type { ComponentProps } from '../../utils/types';

import { styled } from '../../styles/stiches';

export const TextElement = styled('p', {
  // css reset
  all: 'unset',

  variants: {
    variant: {
      h1: {
        fontSize: '$4xl',
      },
      h2: {
        fontSize: '$2xl',
      },
      h3: {
        fontSize: '$xl',
      },
      h4: {
        fontSize: '$lg',
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
  },

  defaultVariants: {
    fontWeight: 'regular',
  },
});

export type TextElementProps = ComponentProps<typeof TextElement>;
