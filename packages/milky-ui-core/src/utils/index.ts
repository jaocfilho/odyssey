import type {
  Css,
  Color,
  ColorVariant,
  CompoundColorVariant,
} from "../styles/stiches/types";

import { colorsArray } from "@milky-ui/tokens";

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
