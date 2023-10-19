import { classNames } from '../../utils';

const dotCommonStyles = 'flex-none rounded-full p-1';

const colorSchemeVariantsStyles = {
  green: 'text-green-400 bg-green-400/10',
  gray: 'text-gray-500 bg-gray-100/10',
  rose: 'text-rose-400 bg-rose-400/10',
};

type DotColorSchemeVariants = keyof typeof colorSchemeVariantsStyles;

export type DotStylesProps = {
  colorScheme?: DotColorSchemeVariants;
};

export function getStyles({ colorScheme }: Required<DotStylesProps>) {
  const colorSchemeStyles = colorSchemeVariantsStyles[colorScheme];

  return classNames(dotCommonStyles, colorSchemeStyles);
}
