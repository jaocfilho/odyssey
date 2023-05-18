import { classNames } from '../../utils';

const badgeCommonStyles =
  'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset';

const solidVariantColorSchemesStyles = {
  pink: 'bg-pink-50 text-pink-700 ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20',
};

type BadgeSolidVariantColors = keyof typeof solidVariantColorSchemesStyles;

const dottedVariantColorSchemesStyles = {
  pink: 'gap-x-1.5 text-gray-900 ring-gray-200 dark:text-zinc-200 dark:ring-gray-800',
};

type BadgeDottedVariantColors = keyof typeof dottedVariantColorSchemesStyles;

type BadgeVariants = 'solid' | 'dotted';
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
  let colorSchemeStyles = '';

  switch (variant) {
    case 'solid':
      colorSchemeStyles = solidVariantColorSchemesStyles[colorScheme];
      break;

    case 'dotted':
      colorSchemeStyles = dottedVariantColorSchemesStyles[colorScheme];
      break;

    default:
      break;
  }

  return classNames(badgeCommonStyles, colorSchemeStyles);
}
