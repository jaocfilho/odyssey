import { describe, expect, it } from "vitest";

import { assertObjectProperties } from "satellite";
import { colorsArray, spaceScales, Color } from "@milky-ui/tokens";

import { paddingPropertiesAbbreviationsUtils } from "../styles/stiches/utils";

import {
  convertVariantsMapToObject,
  createColorVariants,
  createCompoundColorVariants,
  createPaddingVariants,
  createSpaceVariants,
  createSpaceScalesVariantsMap,
  createSpaceVariantsMap,
} from ".";

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

  describe("createSpaceScalesVariantsMap", () => {
    const property = "px";
    const spaceScalesMap = createSpaceScalesVariantsMap(property);

    it("should return an array of the size of the amount of tokens", () => {
      expect(spaceScalesMap.length).toEqual(spaceScales.length);
    });

    it("should return an array of 2 dimensional tuples", () => {
      spaceScalesMap.forEach((tuple) => {
        expect(tuple).toHaveLength(2);
      });
    });

    it("should correctly return the tokens values on the first element", () => {
      spaceScalesMap.forEach(([token, _]) => {
        expect(spaceScales).toContain(token);
      });
    });

    it("should containg a property key on each css declaration", () => {
      spaceScalesMap.forEach(([_, declaration]) => {
        expect(declaration).toHaveProperty(property);
      });
    });

    it("should containg the correct token value on each declaration", () => {
      spaceScalesMap.forEach(([token, declaration]) => {
        const value = declaration[property];
        const expectedValue = `$${token}`;

        expect(value).toEqual(expectedValue);
      });
    });
  });

  describe("convertVariantsMapToObject", () => {
    const property = "px";
    const variants = convertVariantsMapToObject(property);

    it("should return an object containing all variants", () => {
      const variantsKeys = Object.keys(variants);

      expect(variantsKeys).toEqual(spaceScales);
    });
  });

  describe("createSpaceVariantsMap", () => {
    const properties = ["px", "py"];
    const variantsMap = createSpaceVariantsMap(properties);

    it("should return an array of the size of the properties", () => {
      expect(variantsMap.length).toEqual(properties.length);
    });

    it("should have each property on the first position of each tuple", () => {
      variantsMap.forEach(([property, _]) => {
        expect(properties).toContain(property);
      });
    });
  });

  describe("createSpaceVariants", () => {
    const properties = ["px", "py"];
    const variants = createSpaceVariants(properties);

    it("should return an object containing all properties as keys", () => {
      const variantsKeys = Object.keys(variants);

      expect(variantsKeys).toEqual(properties);
    });

    it("should have all variants for each property", () => {
      properties.forEach((property) => {
        const variant = variants[property];
        const scales = Object.keys(variant);

        expect(scales).toEqual(spaceScales);
      });
    });
  });

  describe("createPaddingVariants", () => {
    it("should return an object containing all padding properties as keys", () => {
      const properties = Object.keys(paddingPropertiesAbbreviationsUtils);

      const paddingVariants = createPaddingVariants();

      assertObjectProperties(properties, paddingVariants);
    });
  });
});
