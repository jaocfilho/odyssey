import Link from 'next/link';

import {
  classNames,
  getButtonStyles,
  Button as TuiButton,
  ButtonProps as TuiButtonProps,
} from 'tailwind-ui';

type ButtonProps = TuiButtonProps & {
  href?: string;
};

export function Button({
  href,
  colorScheme,
  size,
  className,
  children,
  ...rest
}: ButtonProps) {
  const buttonStyles = getButtonStyles({ size, colorScheme });
  const styles = classNames(buttonStyles, className ?? '');

  return href ? (
    <Link href={href} className={styles}>
      {children}
    </Link>
  ) : (
    <TuiButton
      className={className}
      colorScheme={colorScheme}
      size={size}
      {...rest}
    >
      {children}
    </TuiButton>
  );
}
