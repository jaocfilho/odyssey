type StyleVariant<T extends string> = {
  [key in T]?: string;
};

type SizeTokens = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type SizeVariants = StyleVariant<SizeTokens>;

type ColorSchemeTokens =
  | 'default'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

type ColorSchemeVariants = StyleVariant<ColorSchemeTokens>;

type GrayScaleTokens =
  | 'default'
  | 'gray'
  | 'stone'
  | 'slate'
  | 'zinc'
  | 'neutral';

type GrayScaleVariants = StyleVariant<GrayScaleTokens>;

export type Styles = {
  default?: string;
  size?: SizeVariants;
  colorScheme?: ColorSchemeVariants;
  grayScale?: GrayScaleVariants;
};