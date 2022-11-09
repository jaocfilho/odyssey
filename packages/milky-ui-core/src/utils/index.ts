import type {
  PrefixedSpaceTokenScale,
  SpaceTokenScale,
} from "@milky-ui/tokens";

import type {
  Css,
  Color,
  ColorVariant,
  CompoundColorVariant,
} from "../styles/stiches/types";

import { colorsArray, spaceScales } from "@milky-ui/tokens";

import { paddingPropertiesAbbreviationsUtils } from "../styles/stiches/utils";

type CreateColorVariantsParams = {
  variantFormat: (color: Color) => Css;
  excludedColors?: Color[];
};

/**
 * Creates an object of color variants.
 *
 * Receives a callback to handle the format of each color variant.
 * The returned object contains each color as key.
 *
 * By default, it uses all colors from the main theme, but you can
 * pass an optional array of excluded colors to change this.
 *
 * @param variantFormat A callback.
 * @param excludedColors An optional array of color strings.
 *
 * @example
 * const colorVariants = createColorVariants({
 * variantFormat: (color) => ({
 *     solidColorScheme: color,
 *   }),
 * });
 *
 */
export const createColorVariants = ({
  variantFormat,
  excludedColors = [],
}: CreateColorVariantsParams): ColorVariant => {
  // remove all excluded colors from the main colors array
  const colors = colorsArray.filter((color) => {
    return !excludedColors.includes(color);
  });

  // create a list of key-value pairs
  const variantsMap = colors.map((color) => {
    const format = variantFormat(color);
    return [color, format];
  });
  // transforms variantsMap into an object
  const colorVariants = Object.fromEntries(variantsMap);

  return colorVariants;
};

type CreateCompoundColorVariantsParams = {
  variantFormat: (color: Color) => Omit<CompoundColorVariant, "color">;
  excludedColors?: Color[];
};

/**
 * Creates an array of compound variants, each one of them
 * containing a color key.
 *
 * Receives a callback to handle the format of each color variant.
 *
 * By default, it uses all colors from the main theme, but you can
 * pass an optional array of excluded colors to change this.
 *
 * @param variantFormat A callback.
 * @param excludedColors An optional array of color strings.
 *
 * @example
 * const compoundVariants = createCompoundColorVariants({
 * variantFormat: (color) => ({
 *     solidColorScheme: color,
 *   }),
 * });
 *
 */
export const createCompoundColorVariants = ({
  variantFormat,
  excludedColors = [],
}: CreateCompoundColorVariantsParams): CompoundColorVariant[] => {
  // remove all excluded colors from the main colors array
  const colors = colorsArray.filter((color) => {
    return !excludedColors.includes(color);
  });

  const variantsMap: CompoundColorVariant[] = [];
  // for each color, add a variant to variantsMap
  colors.forEach((color) => {
    const variant = variantFormat(color);
    variantsMap.push({ color, ...variant });
  });

  return variantsMap;
};

type SpaceCssDeclaration = {
  [property: string]: PrefixedSpaceTokenScale;
};

type SpaceTokenMap = [SpaceTokenScale, SpaceCssDeclaration];

/**
 * Receives a css property and returns an array of tuples for each
 * `space` token value. Each tuple has a token value and a
 * css declaration, where the property value is the token value.
 *
 * @param property A string representing a css property.
 *
 * @example
 * const tokensMap = createSpaceVariantsMap('px');
 * tokensMap // [["1", { px: "$1" }], ["2", { px: "$2" }] ...]
 *
 */
export const createSpaceVariantsMap = (property: string) => {
  const tokensMap = spaceScales.map((tokenValue) => {
    const prefixedToken: PrefixedSpaceTokenScale = `$${tokenValue}`;
    // creates a css declaration for each token value
    const declaration = { [property]: prefixedToken };
    return [tokenValue, declaration] as SpaceTokenMap;
  });

  return tokensMap;
};

type SpaceVariant = {
  [k: string]: SpaceCssDeclaration;
};

/**
 * Converts a space variants map for a given property into an
 * object, where each key is a scale from `space` tokens.
 *
 * @param property A string representing a css property.
 *
 * @example
 * const variant = convertVariantsMapToObject("px");
 * variant // { "1": { px: "$1" }, "2": { px: "$2" }, ... }
 *
 */
export const convertVariantsMapToObject = (property: string): SpaceVariant => {
  const spaceVariantsMap = createSpaceVariantsMap(property);

  // transforms spaceVariantsMap into an object
  const variant = Object.fromEntries(spaceVariantsMap);

  return variant;
};

export const createSpaceVariants = (properties: string[]) => {
  const variantsMap = properties.map((property) => {
    const variants = convertVariantsMapToObject(property);

    return { [property]: variants };
  });

  return variantsMap;
};

export const createPaddingVariants = () => {
  const properties = Object.keys(paddingPropertiesAbbreviationsUtils);

  return createSpaceVariants(properties);
};
