import { type ButtonHTMLAttributes } from 'react';
import { classNames } from '../src';
import { Spinner } from '../src/components/Spinner';
import { StylesVariantsTokens } from '../src/core/tokens';
import { buttonStyles } from './styles';

type ButtonStylesProps = Omit<StylesVariantsTokens, 'grayScale'>;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStylesProps & {
    loading?: boolean;
  };

export const Button = ({
  className,
  size = 'md',
  colorScheme = 'default',
  children,
  loading,
  disabled,
  ...rest
}: ButtonProps) => {
  const styles = buttonStyles.getStyles({ size, colorScheme });

  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      className={classNames(styles, className ?? '')}
      {...rest}
      disabled={isDisabled}
    >
      {loading ? <Spinner className={children ? 'mr-3' : undefined} /> : null}
      {children}
    </button>
  );
};
