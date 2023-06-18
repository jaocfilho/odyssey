import { Menu, MenuButtonProps } from '@headlessui/react';

import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { type ButtonStylesProps, getButtonStyles } from '../../Button/styles';
import { classNames } from '../../../utils';

type DropdownButtonProps = MenuButtonProps<'button'> & ButtonStylesProps;

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
