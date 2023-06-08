import { classNames } from '../../utils';

const textareaCommonStyles =
  'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-grayScheme-900 dark:text-white placeholder:text-grayScheme-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-grayScheme-50/5 ring-grayScheme-300 dark:ring-grayScheme-50/10';

const colorSchemeVariantsStyles = {
  indigo: 'focus:ring-indigo-600 dark:focus:ring-indigo-500',
  emerald: 'focus:ring-emerald-600 dark:focus:ring-emerald-500',
};

type TextareaColorSchemeVariants = keyof typeof colorSchemeVariantsStyles;

export type TextareaStylesProps = {
  colorScheme?: TextareaColorSchemeVariants;
};

export function getStyles({ colorScheme }: Required<TextareaStylesProps>) {
  const colorSchemeStyles = colorSchemeVariantsStyles[colorScheme];

  return classNames(textareaCommonStyles, colorSchemeStyles);
}
