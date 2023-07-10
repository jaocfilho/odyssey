import { classNames } from '../../utils';

const buttonCommonStyles =
  'flex font-semibold text-white shadow-sm justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50';

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
    'dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:focus-visible:outline-emerald-500 bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-emerald-600 disabled:dark:bg-emerald-700',

  indigo:
    'dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 disabled:dark:bg-indigo-700',

  purple:
    'dark:bg-purple-500 dark:hover:bg-purple-400 dark:focus-visible:outline-purple-500 bg-purple-600 hover:bg-purple-500 focus-visible:outline-purple-600 disabled:dark:bg-purple-700',

  pink: 'dark:bg-pink-500 dark:hover:bg-pink-400 dark:focus-visible:outline-pink-500 bg-pink-600 hover:bg-pink-500 focus-visible:outline-pink-600 disabled:dark:bg-pink-700',

  red: 'dark:bg-red-500 dark:hover:bg-red-400 dark:focus-visible:outline-red-500 bg-red-600 hover:bg-red-500 focus-visible:outline-red-600 disabled:dark:bg-red-700',

  gray: 'dark:bg-white/10 dark:hover:bg-white/20 dark:focus-visible:outline-white text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:dark:bg-white/10',
};

type ButtonColorSchemeVariants = keyof typeof colorSchemeVariantsStyles;

export type ButtonStylesProps = {
  size?: ButtonSizeVariants;
  colorScheme?: ButtonColorSchemeVariants;
};

export function getButtonStyles({
  size = 'md',
  colorScheme = 'emerald',
}: ButtonStylesProps) {
  const sizeStyles = sizeVariantsStyles[size];
  const colorSchemeStyles = colorSchemeVariantsStyles[colorScheme];

  return classNames(buttonCommonStyles, sizeStyles, colorSchemeStyles);
}
