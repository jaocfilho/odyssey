import { classNames } from '../../utils';

const badgeCommonStyles =
  'inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset';

const solidVariantColorSchemesStyles = {
  pink: 'bg-pink-50 text-pink-700 ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20',
};

type BadgeSolidVariantColors = keyof typeof solidVariantColorSchemesStyles;

const dottedVariantColorSchemesStyles = {
  pink: 'gap-x-1.5 text-gray-900 ring-gray-200 dark:text-zinc-200 dark:ring-gray-800',
};

type BadgeDottedVariantColors = keyof typeof dottedVariantColorSchemesStyles;

const variantsMap = {
  solid: solidVariantColorSchemesStyles,
  dotted: dottedVariantColorSchemesStyles,
};

type BadgeVariants = keyof typeof variantsMap;
type BadgeColorSchemeVariants =
  | BadgeDottedVariantColors
  | BadgeSolidVariantColors;

export type BadgeStylesProps = {
  variant?: BadgeVariants;
  colorScheme?: BadgeColorSchemeVariants;
};

export function getStyles({
  variant,
  colorScheme,
}: Required<BadgeStylesProps>) {
  const variantStyles = variantsMap[variant];
  const colorSchemeStyles = variantStyles[colorScheme];

  return classNames(badgeCommonStyles, colorSchemeStyles);
}
