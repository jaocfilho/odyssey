import { createColorVariants, createCompoundColorVariants } from '../../utils';

import { styled } from '../../styles/stiches';
import { ComponentProps } from '../../utils/types';

export const BaseButton = styled('button', {
  // css reset
  all: 'unset',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontFamily: 'inherit',
  fontWeight: '$medium',

  rounded: '$xs',

  color: '$gray11',

  variants: {
    color: createColorVariants({
      variantFormat: (color) => ({}),
    }),

    variant: {
      solid: {},
      outline: {},
      faded: {},
      fadedA: {},
    },

    size: {
      small: {
        height: '$space$4',
        fontSize: '$sm',
      },

      medium: {
        height: '$space$5',
        fontSize: '$md',
      },

      large: {
        height: '$space$6',
        fontSize: '$lg',
      },
    },

    cursorPointer: {
      true: {
        cursor: 'pointer',
      },
    },
  },

  compoundVariants: [
    ...createCompoundColorVariants({
      variantFormat: (color) => ({
        variant: 'solid',
        css: {
          colorContrastTextColor: true,
          solidColorScheme: color,
        },
      }),
    }),

    ...createCompoundColorVariants({
      variantFormat: (color) => ({
        variant: 'outline',
        css: {
          lowContrastTextColor: color,
          outlineColorScheme: color,
        },
      }),
    }),

    ...createCompoundColorVariants({
      variantFormat: (color) => ({
        variant: 'faded',
        css: {
          lowContrastTextColor: color,
          fadedColorScheme: color,
        },
      }),
    }),

    ...createCompoundColorVariants({
      variantFormat: (color) => ({
        variant: 'fadedA',
        css: {
          lowContrastTextColor: color,
          fadedAColorScheme: color,
        },
      }),
    }),
  ],

  defaultVariants: {
    color: 'gray',
    variant: 'solid',
    size: 'medium',
    cursorPointer: true,
  },
});

export const Button = styled(BaseButton, {
  py: '$2',
  px: '$4',
});

export type ButtonProps = ComponentProps<typeof Button>;
