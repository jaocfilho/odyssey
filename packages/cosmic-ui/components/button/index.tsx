import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, type ButtonHTMLAttributes } from 'react';
import { ButtonStyleProps, buttonStyles } from './styles';
export { buttonColorOptions, buttonVariantOptions } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleProps & {
    loading?: boolean;
  };

export const BaseButton = (
  {
    color,
    variant,
    className,
    children,
    loading,
    disabled,
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const classes = clsx(
    className,
    buttonStyles.base,
    buttonStyles.variant[variant ?? 'solid'],
    buttonStyles.colors[color ?? 'dark/zinc']
  );

  const isDisabled = disabled || loading;

  return (
    <HeadlessButton
      type="button"
      className={classes}
      {...rest}
      disabled={isDisabled}
      ref={ref}
    >
      {children}
    </HeadlessButton>
  );
};

export const Button = forwardRef(BaseButton);
