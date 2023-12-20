import {
  StylesConfig,
  StylesVariantsConfig,
  StylesVariantsTokens,
} from './tokens';

type TokensFor<S extends keyof StylesVariantsConfig> = StylesVariantsTokens[S];

export const buildStyles = (stylesConfig: StylesConfig) => {
  const { base, ...stylesVariantsConfig } = stylesConfig;

  const getClassNames = <S extends keyof StylesVariantsConfig>(
    style: S,
    variant: TokensFor<S>
  ) => {
    const variantsMap = stylesVariantsConfig[style];
    if (!variantsMap) return '';

    const variantClassName = Object.entries(variantsMap).find(
      ([key]) => key === variant
    )?.[1];

    return variantClassName ?? '';
  };

  const getStyles = (variants: StylesVariantsTokens) => {
    const classNames = Object.entries(variants).reduce(
      (acc, [style, variant]) => {
        const className = getClassNames(
          style as keyof StylesVariantsConfig,
          variant
        );

        return `${acc} ${className}`;
      },
      base
    );

    return classNames.trim();
  };

  return { getClassNames, getStyles };
};
