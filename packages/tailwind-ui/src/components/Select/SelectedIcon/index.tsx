import { CheckIcon } from '@heroicons/react/20/solid';

import {
  ColorSchemeVariants,
  StyleConfig,
  classNames,
  styling,
} from '../../../utils';

const styles: StyleConfig = {
  commonStyles: 'absolute inset-y-0 right-0 flex items-center pr-4',

  colorSchemeVariantsStyles: {
    default: 'text-indigo-600 dark:text-indigo-500',
    emerald: 'text-emerald-600 dark:text-emerald-500',
    indigo: 'text-indigo-600 dark:text-indigo-500',
    error: 'text-red-600 dark:text-red-500',
  },
};

type SelectedIconStylesProps = {
  colorScheme?: ColorSchemeVariants;
};

function selectedIconStyles(
  active: boolean,
  { colorScheme = 'indigo' }: SelectedIconStylesProps
) {
  const baseStyle = styling({ colorScheme }, styles);

  return classNames(baseStyle, active ? 'text-white dark:text-white' : '');
}

type SelectedIconProps = SelectedIconStylesProps & {
  selected: boolean;
  active: boolean;
};

export function SelectedIcon({
  selected,
  active,
  colorScheme,
}: SelectedIconProps) {
  if (!selected) {
    return null;
  }

  return (
    <span className={selectedIconStyles(active, { colorScheme })}>
      <CheckIcon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}
