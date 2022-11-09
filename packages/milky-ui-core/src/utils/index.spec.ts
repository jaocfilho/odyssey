import type { Color } from "../styles/stiches/types";

import { describe, expect, it } from "vitest";

import { assertObjectProperties } from "satellite";
import { colorsArray, space } from "@milky-ui/tokens";

import { directionAbbreviationsUtils } from "../styles/stiches/utils";

import { createColorVariants, createCompoundColorVariants, createPaddingVariants } from ".";

describe("theme utils", () => {
  describe("createColorVariants", () => {
    it("should return an object with all passed colors as keys", () => {
      const colorVariants = createColorVariants({
        variantFormat: (color) => ({
          solidColorScheme: color,
        }),
      });

      assertObjectProperties(colorsArray, colorVariants);
    });

    it("should return the correct format for each color", () => {
      const colorVariants = createColorVariants({
        variantFormat: (color) => ({
          solidColorScheme: color,
        }),
      });

      colorsArray.map((color) => {
        const variantFormat = colorVariants[color];
        expect(variantFormat).toEqual({ solidColorScheme: color });
      });
    });

    it("should correctly exclude colors", () => {
      const excludedColors = ["blue", "crimson"] as Color[];

      const colorVariants = createColorVariants({
        variantFormat: (color) => ({
          solidColorScheme: color,
        }),
        excludedColors,
      });

      excludedColors.map((color) => {
        expect(colorVariants).not.toHaveProperty(color);
      });
    });
  });

  describe("createCompoundColorVariants", () => {
    it("should return an array containing each variant", () => {
      const compoundVariants = createCompoundColorVariants({
        variantFormat: (color) => ({
          variant: "solid",
          css: {},
        }),
      });

      compoundVariants.map((variant) => {
        expect(variant).toHaveProperty("color");
        expect(variant).toHaveProperty("variant", "solid");
      });
    });

    it("should return the correct format for each color", () => {
      const compoundVariants = createCompoundColorVariants({
        variantFormat: (color) => ({
          variant: "solid",
          css: {
            color,
          },
        }),
      });

      colorsArray.map((color, index) => {
        expect(compoundVariants[index]).toHaveProperty("css.color", color);
      });
    });

    it("should correctly exclude colors", () => {
      const excludedColors = ["blue", "crimson"] as Color[];

      const compoundVariants = createCompoundColorVariants({
        variantFormat: (color) => ({
          variant: "solid",
          css: {
            color,
          },
        }),
        excludedColors,
      });

      // map all color variants to assert that the excluded
      // colors are not inside
      const colorVariants = compoundVariants.map((variant) => {
        return variant.color;
      });

      excludedColors.map((color) => {
        const isIncluded = colorVariants.includes(color);
        expect(isIncluded).toBeFalsy();
      });
    });
  });

  describe("createPaddingVariants", () => {
    it("should return an object containing all directions as keys", () => {
      const directionOptions = Object.keys(directionAbbreviationsUtils);

      const paddingVariants = createPaddingVariants();

      const variants = Object.keys(paddingVariants);

      assertObjectProperties(variants, directionOptions);
    });

    it("should have all tokens variants on each object", () => {
      const paddingVariants = createPaddingVariants();

      const variantsKeys = Object.keys(paddingVariants);

      variantsKeys.forEach((key) => {
        const variant = paddingVariants[key];
        const options = Object.keys(variant);
        options.sort();

        const tokens = Object.keys(space);
        tokens.sort();

        expect(options).toEqual(tokens);
      })
    });
  });
});
