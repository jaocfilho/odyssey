import type {
  PrefixedSpaceTokenScale,
  SpaceTokenScale,
  Color,
} from '@milky-ui/tokens';

import type { Css } from '../styles/stiches/types';
import type {
  ColorVariant,
  CompoundColorVariant,
  TextColorVariant,
} from './types';

import { colorsArray, spaceScales } from '@milky-ui/tokens';

import { arrayDifference } from 'satellite';

import {
  marginPropertiesAbbreviationsUtils,
  paddingPropertiesAbbreviationsUtils,
  TextColorVariants,
  textColorVariantsNames,
} from '../styles/stiches/utils';

export const standartThemeColors = colorsArray;

type CreateColorVariantsParams = {
  variantFormat: (color: Color) => Css;
  excludedColors?: Color[];
};

/**
 * Creates an object of color variants.
 *
 * Receives a callback to handle the format of each color variant.
 * The callback receives a color variant as param and must
 * a CSS object.
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
  const colors = arrayDifference(colorsArray, excludedColors);

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
  variantFormat: (color: Color) => Omit<CompoundColorVariant, 'color'>;
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
  const colors = arrayDifference(colorsArray, excludedColors);

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

type SpaceScalesMap = [SpaceTokenScale, SpaceCssDeclaration];

/**
 * Receives a css property and returns an array of tuples for each
 * `space` token value. Each tuple has a token value and a
 * css declaration, where the property value is the token value.
 *
 * @param property A string representing a css property.
 *
 * @example
 * const scalesMap = createSpaceScalesVariantsMap('px');
 * scalesMap // [["1", { px: "$1" }], ["2", { px: "$2" }] ...]
 *
 */
export const createSpaceScalesVariantsMap = (property: string) => {
  const scalesMap = spaceScales.map((tokenValue) => {
    const prefixedToken: PrefixedSpaceTokenScale = `$${tokenValue}`;
    // creates a css declaration for each token value
    const declaration = { [property]: prefixedToken };
    return [tokenValue, declaration] as SpaceScalesMap;
  });

  return scalesMap;
};

type ScaleVariant = {
  [spaceScale: string]: SpaceCssDeclaration;
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
export const convertVariantsMapToObject = (property: string): ScaleVariant => {
  const spaceScalesMap = createSpaceScalesVariantsMap(property);

  // transforms spaceScalesMap into an object
  const variant = Object.fromEntries(spaceScalesMap);

  return variant;
};

type SpaceVariantsMap = [string, ScaleVariant];

/**
 * Receives an array of css properties and returns an array of
 * tuples. Each tuple contains a property from the `properties`
 * array and an object containing all possible scale variants
 * from the `space` tokens.
 *
 * @param properties An array of strings representing css properties
 *
 * @example
 * const variantsMap = createSpaceVariantsMap(["px", "py"]);
 * [
 *   "px": { 1: px: "$1", 2: px: "$2", ... },
 *   "py": { 1: px: "$1", 2: px: "$2", ... },
 * ]
 *
 */
export const createSpaceVariantsMap = (properties: string[]) => {
  const variantsMap = properties.map((property) => {
    const variants = convertVariantsMapToObject(property);

    return [property, variants] as SpaceVariantsMap;
  });

  return variantsMap;
};

type SpaceVariant = {
  [property: string]: ScaleVariant;
};

/**
 * Receives an array of css properties and creates an object
 * of space scales variants, for each property on the array.
 *
 * @param properties An array of strings representing css properties.
 *
 * @example
 * const variants = createSpaceVariants(["px", "py"]);
 * {
 *   "px": {
 *     1: { px: "$1" },
 *     2: { px: "$2" },
 *     ...
 *   },
 *   "py": {
 *     1: { py: "$1" },
 *     2: { py: "$2" },
 *     ...
 *   },
 * }
 */
export const createSpaceVariants = (properties: string[]) => {
  const variantsMap = createSpaceVariantsMap(properties);

  const variants: SpaceVariant = Object.fromEntries(variantsMap);

  return variants;
};

/**
 * Returns an object of space variants for each padding
 * abbreviation utils.
 *
 */
export const createPaddingVariants = () => {
  const properties = Object.keys(paddingPropertiesAbbreviationsUtils);

  return createSpaceVariants(properties);
};

/**
 * Returns an object of space variants for each margin
 * abbreviation utils.
 *
 */
export const createMarginVariants = () => {
  const properties = Object.keys(marginPropertiesAbbreviationsUtils);

  return createSpaceVariants(properties);
};

/**
 * Returns an object of space variants for the gap property.
 *
 */
export const createGapVariants = () => {
  const properties = ['gap'];

  return createSpaceVariants(properties);
};

type CreateTextColorVariantParams = {
  textColorVariant: TextColorVariants;
  textVariantFormat: (textColorVariant: TextColorVariants, color: Color) => Css;
};

/** Helper function meant to be used by `createTextColorVariants` */
export const createTextColorVariant = ({
  textColorVariant,
  textVariantFormat,
}: CreateTextColorVariantParams): [TextColorVariants, ColorVariant] => {
  const variantFormat = createColorVariants({
    variantFormat: (color) => textVariantFormat(textColorVariant, color),
  });

  return [textColorVariant, variantFormat];
};

type CreateTextColorVariantsParams = {
  textVariantFormat: (textColorVariant: TextColorVariants, color: Color) => Css;
  excludedVariants?: TextColorVariants[];
};

/**
 * Creates an object of text color variants.
 *
 * Receives a callback to handle the format of each variant.
 * The callback receives a text and a color variant params
 * respectively, and must return a CSS object.
 *
 * By default, it uses all variants from the main theme, but you can
 * pass an optional array of excluded variants to change this.
 *
 * @param variantFormat A callback.
 * @param excludedVariants An optional array of text color variants.
 *
 * @example
 * const textColorVariants = createTextColorVariants({
 * variantFormat: (variant, color) => ({
 *     [variant]: color,
 *   }),
 * });
 *
 */
export const createTextColorVariants = ({
  textVariantFormat,
  excludedVariants = [],
}: CreateTextColorVariantsParams) => {
  // remove all excluded text colors from the main text color variants array
  const textColors = arrayDifference(textColorVariantsNames, excludedVariants);

  const variantsMap = textColors.map((textColorVariant) => {
    const variantMap = createTextColorVariant({
      textColorVariant,
      textVariantFormat,
    });

    return variantMap;
  });

  // remove all excluded variants from the variants types.
  const variants = Object.fromEntries(variantsMap) as Omit<
    TextColorVariant,
    keyof typeof excludedVariants
  >;

  return variants;
};
