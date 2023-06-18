import { Menu, MenuButtonProps as HuiMenuButtonProps } from '@headlessui/react';

import { type ButtonStylesProps, getButtonStyles } from '../../Button/styles';
import { classNames } from '../../../utils';

export type MenuButtonProps = HuiMenuButtonProps<'button'> & ButtonStylesProps;

export function MenuButton({
  colorScheme,
  size,
  className,
  ...rest
}: MenuButtonProps) {
  const variantsStyles = getButtonStyles({ size, colorScheme });
  const styles = classNames(variantsStyles, (className as string) ?? '');

  return <Menu.Button className={styles} {...rest} />;
}
