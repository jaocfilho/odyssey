export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export type ColorSchemeVariants = 'default' | 'emerald' | 'indigo' | 'error';

type ColorSchemeVariantsStyles = {
  [key in ColorSchemeVariants]: string;
};

export type GraySchemeVariants =
  | 'default'
  | 'gray'
  | 'stone'
  | 'slate'
  | 'zinc'
  | 'neutral';

type GraySchemeVariantsStyles = {
  [key in GraySchemeVariants]: string;
};

export type SizeVariants = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type SizeVariantsStyles = {
  [key in SizeVariants]: string;
};

export type StyleConfig = {
  commonStyles: string;
  colorSchemeVariantsStyles?: ColorSchemeVariantsStyles;
  graySchemeVariantsStyles?: GraySchemeVariantsStyles;
  sizeVariantsStyles?: SizeVariantsStyles;
};

type StylesVariants = {
  colorScheme?: ColorSchemeVariants;
  grayScheme?: GraySchemeVariants;
  size?: SizeVariants;
};

export function styling(variants: StylesVariants, styleConfig: StyleConfig) {
  const {
    colorSchemeVariantsStyles,
    graySchemeVariantsStyles,
    sizeVariantsStyles,
    commonStyles,
  } = styleConfig;

  const colorScheme = variants.colorScheme ?? 'default';
  const colorSchemeStyles = colorSchemeVariantsStyles
    ? colorSchemeVariantsStyles[colorScheme]
    : '';

  const grayScheme = variants.grayScheme ?? 'default';
  const graySchemeStyles = graySchemeVariantsStyles
    ? graySchemeVariantsStyles[grayScheme]
    : '';

  const size = variants.size ?? 'md';
  const sizeStyles = sizeVariantsStyles ? sizeVariantsStyles[size] : '';

  return classNames(
    commonStyles,
    colorSchemeStyles,
    graySchemeStyles,
    sizeStyles
  );
}
