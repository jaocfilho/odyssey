import { classNames } from '../../utils';

const buttonCommonStyles =
  'font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const sizeVariantsStyles = {
  xs: 'rounded px-2 py-1 text-xs',
  sm: 'rounded px-2 py-1 text-sm',
  md: 'rounded-md px-2.5 py-1.5 text-sm',
  lg: 'rounded-md px-3 py-2 text-sm',
  xl: 'rounded-md px-3.5 py-2.5 text-sm',
};

type ButtonSizeVariants = keyof typeof sizeVariantsStyles;

const colorSchemeVariantsStyles = {
  emerald:
    'dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:focus-visible:outline-emerald-500 bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-emerald-600',

  indigo:
    'dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600',

  red: 'dark:bg-red-500 dark:hover:bg-red-400 dark:focus-visible:outline-red-500 bg-red-600 hover:bg-red-500 focus-visible:outline-red-600',

  gray: 'dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:focus-visible:outline-emerald-500 dark:text-zinc-200 bg-zinc-600 hover:bg-zinc-500 focus-visible:outline-emerald-600',
};

type ButtonColorSchemeVariants = keyof typeof colorSchemeVariantsStyles;

export type ButtonStylesProps = {
  size?: ButtonSizeVariants;
  colorScheme?: ButtonColorSchemeVariants;
};

export function getStyles({ size, colorScheme }: Required<ButtonStylesProps>) {
  const sizeStyles = sizeVariantsStyles[size];
  const colorSchemeStyles = colorSchemeVariantsStyles[colorScheme];

  return classNames(buttonCommonStyles, sizeStyles, colorSchemeStyles);
}
