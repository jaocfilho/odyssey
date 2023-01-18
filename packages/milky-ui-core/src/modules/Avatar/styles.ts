import type { ComponentProps } from '../../utils/types';

import * as Avatar from '@radix-ui/react-avatar';

import { styled } from '../../styles/stiches';

export const AvatarContainer = styled(Avatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',

  overflow: 'hidden',

  roundedFull: true,

  variants: {
    size: {
      small: {
        height: '$space$7',
        width: '$space$7',
      },
      medium: {
        height: '$space$8',
        width: '$space$8',
      },
      large: {
        height: '$space$10',
        width: '$space$10',
      },
      larger: {
        height: '$space$12',
        width: '$space$12',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

export type AvatarContainerProps = ComponentProps<typeof AvatarContainer>;

export const AvatarImage = styled(Avatar.Image, {
  hFull: true,
  wFull: true,
  objectFit: 'cover',
  rounded: 'inherit',

  variants: {
    cursorPointer: {
      true: {
        cursor: 'pointer',
      },
    },
  },
});

export type AvatarImageProps = ComponentProps<typeof AvatarImage>;

export const AvatarFallback = styled(Avatar.Fallback, {
  hFull: true,
  wFull: true,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  rounded: 'inherit',
});

export type AvatarFallbackProps = ComponentProps<typeof AvatarFallback>;
