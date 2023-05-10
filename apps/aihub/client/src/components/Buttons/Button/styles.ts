export const buttonCommonStyles =
  'font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

export const sizeVariantsStyles = {
  xs: 'rounded px-2 py-1 text-xs',
  sm: 'rounded px-2 py-1 text-sm',
  md: 'rounded-md px-2.5 py-1.5 text-sm',
  lg: 'rounded-md px-3 py-2 text-sm',
  xl: 'rounded-md px-3.5 py-2.5 text-sm',
};

export type SizeVariants = keyof typeof sizeVariantsStyles;

export const colorSchemeVariantsStyles = {
  emerald:
    'dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:focus-visible:outline-emerald-500 bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-emerald-600',

  indigo:
    'dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600',

  gray: 'dark:bg-zinc-50/10 dark:text-white dark:hover:bg-zinc-50/20 dark:focus-visible:outline-emerald-500 bg-white text-gray-900  hover:bg-gray-50',
};

export type ColorSchemeVariants = keyof typeof colorSchemeVariantsStyles;
