import { Menu, MenuButtonProps } from '@headlessui/react';

import { type ButtonStylesProps, getButtonStyles } from '../../Button/styles';
import { classNames } from '../../../utils';

export type DropdownButtonProps = MenuButtonProps<'button'> & ButtonStylesProps;

export function DropdownButton({
  colorScheme,
  size,
  className,
  ...rest
}: DropdownButtonProps) {
  const variantsStyles = getButtonStyles({ size, colorScheme });
  const styles = classNames(variantsStyles, (className as string) ?? '');

  return <Menu.Button className={styles} {...rest} />;
}
