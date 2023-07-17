import { CheckIcon } from '@heroicons/react/20/solid';

import { classNames } from '../../../utils';
import { SelectStylesProps } from '..';

const selectedIconCommonStyles =
  'absolute inset-y-0 right-0 flex items-center pr-4';

const activeStyles = 'text-white';

type ColorSchemeVariants = NonNullable<SelectStylesProps['colorScheme']>;

type ColorSchemeVariantsStyles = {
  [key in ColorSchemeVariants]: string;
};

const colorSchemeVariantsStyles: ColorSchemeVariantsStyles = {
  emerald: 'text-emerald-600 dark:text-emerald-500',
  indigo: 'text-indigo-600 dark:text-indigo-500',
  error: 'text-red-600 dark:text-red-500',
};

type SelectedIconStylesProps = {
  colorScheme?: ColorSchemeVariants;
};

function selectedIconStyles(
  active: boolean,
  { colorScheme = 'indigo' }: SelectedIconStylesProps
) {
  const colorSchemeStyles = colorSchemeVariantsStyles[colorScheme];

  return classNames(
    active ? activeStyles : colorSchemeStyles,
    selectedIconCommonStyles
  );
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
