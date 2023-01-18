'use client';

import {
  AvatarContainer,
  AvatarImage,
  AvatarImageProps,
  AvatarFallback,
} from './styles';

export type AvatarProps = AvatarImageProps;

/**
 * An image element with a fallback for representing the user.
 *
 * The avatar component comes with 4 sizes.
 *
 * `small` | `medium` | `large` | `larger`
 *
 */
export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback />
    </AvatarContainer>
  );
};
