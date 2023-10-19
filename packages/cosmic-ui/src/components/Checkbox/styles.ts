export const checkboxCommonStyles = 'cursor-pointer bg-inherit h-4 w-4 rounded';

export const colorSchemeVariantsStyles = {
  emerald:
    'dark:border-zinc-500 dark:hover:border-emerald-500 dark:text-emerald-500 dark:focus:ring-emerald-500',
};

type CheckboxColorSchemeVariants = keyof typeof colorSchemeVariantsStyles;

export type CheckboxStylesProps = {
  colorScheme?: CheckboxColorSchemeVariants;
};
