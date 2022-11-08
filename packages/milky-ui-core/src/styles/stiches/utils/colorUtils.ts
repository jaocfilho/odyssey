import { Stitches } from "../types";

export const colorUtils = {
  // Abbreviated color properties
  bgColor: (value: Stitches.PropertyValue<"color">) => ({
    backgroundColor: value,
  }),

  /**
   * https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-910-solid-backgrounds
   *
   */
  solidColor: (value: Stitches.PropertyValue<"color">) => ({
    backgroundColor: `$${value}9`,
  }),

  /**
   * https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-910-solid-backgrounds
   *
   */
  solidColorScheme: (value: Stitches.PropertyValue<"color">) => ({
    solidColor: value,
    "&:hover": {
      backgroundColor: `$${value}10`,
    },
  }),

  solidTextColor: (value: boolean) => ({
    color: "$whiteA12",
  }),

  /**
   * https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-68-borders
   */
  outlineColorScheme: (value: Stitches.PropertyValue<"color">) => ({
    border: "$borderWidth$2",
    backgroundColor: `$${value}1`,
    borderSolid: true,
    borderColor: `$${value}7`,
    "&:hover": {
      borderColor: `$${value}8`,
    },
  }),

  outlineTextColor: (value: Stitches.PropertyValue<"color">) => ({
    color: `$${value}11`,
  }),

  /**
   * https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-35-component-backgrounds
   */
  fadedColorScheme: (value: Stitches.PropertyValue<"color">) => ({
    backgroundColor: `$${value}4`,
    "&:hover": {
      backgroundColor: `$${value}5`,
    },
    "&:active": {
      backgroundColor: `$${value}6`,
    },
  }),

  fadedTextColor: (value: Stitches.PropertyValue<"color">) => ({
    color: `$${value}11`,
  }),

  /**
   * https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-35-component-backgrounds
   */
  fadedAColorScheme: (value: Stitches.PropertyValue<"color">) => ({
    backgroundColor: `$${value}3`,
    "&:hover": {
      backgroundColor: `$${value}4`,
    },
    "&:active": {
      backgroundColor: `$${value}5`,
    },
  }),

  fadedATextColor: (value: Stitches.PropertyValue<"color">) => ({
    color: `$${value}11`,
  }),
};
