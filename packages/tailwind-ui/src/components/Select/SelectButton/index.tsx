import { Listbox } from '@headlessui/react';

import { UpDownIcon } from '../UpDownIcon';
import { SelectItem } from '../SelectOption';
import { classNames } from '../../../utils';

const selectButtonCommonStyles =
  'relative w-full text-left cursor-default rounded-md border-0 py-1.5 pl-3 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6';

const colorSchemeVariantsStyles = {
  indigo: 'focus:ring-indigo-600 dark:focus:ring-indigo-500',
  emerald: 'focus:ring-emerald-600 dark:focus:ring-emerald-500',
  error:
    'focus:ring-red-600 dark:focus:ring-red-500 text-red-900 dark:text-red-500',
};

type SelectButtonColorSchemeVariants = keyof typeof colorSchemeVariantsStyles;

const graySchemeVariantsStyles = {
  gray: 'bg-white dark:bg-white/5 text-gray-900 dark:text-white ring-gray-300 dark:ring-gray-50/10 dark:disabled:bg-gray-950 dark:disabled:text-gray-400 disabled:bg-gray-50 disabled:ring-gray-200 dark:disabled:ring-gray-50/10 disabled:text-gray-500 placeholder:text-gray-400 dark:placeholder:text-gray-600',
};

type SelectButtonGraySchemeVariants = keyof typeof graySchemeVariantsStyles;

export type SelectButtonStylesProps = {
  colorScheme?: SelectButtonColorSchemeVariants;
  grayScheme?: SelectButtonGraySchemeVariants;
};

function selectButtonStyles({
  colorScheme = 'indigo',
  grayScheme = 'gray',
}: SelectButtonStylesProps) {
  const colorSchemeStyles = colorSchemeVariantsStyles[colorScheme];
  const graySchemeStyles = graySchemeVariantsStyles[grayScheme];

  return classNames(
    selectButtonCommonStyles,
    colorSchemeStyles,
    graySchemeStyles
  );
}

type SelectButtonProps = SelectButtonStylesProps & {
  selectedItem?: SelectItem;
  placeholder?: string;
};

export function SelectButton({
  selectedItem,
  placeholder,
  colorScheme,
  grayScheme,
}: SelectButtonProps) {
  const styles = selectButtonStyles({ colorScheme, grayScheme });

  const display = selectedItem ? selectedItem.label : placeholder;

  return (
    <Listbox.Button className={styles} placeholder={placeholder}>
      <span className="block truncate">{display}</span>
      <UpDownIcon />
    </Listbox.Button>
  );
}
