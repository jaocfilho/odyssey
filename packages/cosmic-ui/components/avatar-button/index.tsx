import {
  Button as HeadlessButton,
  ButtonProps as HeadlessButtonProps,
} from '@headlessui/react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { Avatar, AvatarProps } from '../avatar';
import { TouchTarget } from '../touch-target';

export type AvatarButtonProps = AvatarProps & HeadlessButtonProps;

export const BaseAvatarButton = (
  {
    color,
    square,
    className,
    children,
    disabled,
    src,
    initials,
    alt,
    ...rest
  }: AvatarButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  let classes = clsx(
    className,
    square ? 'rounded-lg' : 'rounded-full',
    'relative focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500'
  );

  return (
    <HeadlessButton {...rest} className={classes} ref={ref}>
      <TouchTarget>
        <Avatar src={src} square={square} initials={initials} alt={alt} />
      </TouchTarget>
    </HeadlessButton>
  );
};

export const AvatarButton = forwardRef(BaseAvatarButton);
