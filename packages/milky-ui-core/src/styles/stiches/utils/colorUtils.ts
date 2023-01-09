import { Stitches } from '../types';

const textColorVariants = {
  highContrastTextColor: (value: Stitches.PropertyValue<'color'>) => ({
    color: `$${value}12`,
  }),

  lowContrastTextColor: (value: Stitches.PropertyValue<'color'>) => ({
    color: `$${value}11`,
  }),

  colorContrastTextColor: (value: boolean) => ({
    color: '$whiteA12',
  }),

  colorHighlightedTextColor: (value: Stitches.PropertyValue<'color'>) => ({
    color: `$${value}1`,
  }),
};

export const colorUtils = {
  ...textColorVariants,

  // Abbreviated color properties
  bgColor: (value: Stitches.PropertyValue<'color'>) => ({
    backgroundColor: value,
  }),

  /**
   * @reference https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-910-solid-backgrounds
   *
   */
  solidColor: (value: Stitches.PropertyValue<'color'>) => ({
    backgroundColor: `$${value}9`,
  }),

  /**
   * @reference https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-910-solid-backgrounds
   *
   */
  solidColorScheme: (value: Stitches.PropertyValue<'color'>) => ({
    solidColor: value,
    '&:hover': {
      backgroundColor: `$${value}10`,
    },
  }),

  /**
   * @reference https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-68-borders
   */
  outlineColorScheme: (value: Stitches.PropertyValue<'color'>) => ({
    border: '$borderWidth$2',
    backgroundColor: `$${value}1`,
    borderSolid: true,
    borderColor: `$${value}7`,
    '&:hover': {
      borderColor: `$${value}8`,
    },
  }),

  /**
   * @reference https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-35-component-backgrounds
   */
  fadedColorScheme: (value: Stitches.PropertyValue<'color'>) => ({
    backgroundColor: `$${value}4`,
    '&:hover': {
      backgroundColor: `$${value}5`,
    },
    '&:active': {
      backgroundColor: `$${value}6`,
    },
  }),

  /**
   * @reference https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-35-component-backgrounds
   */
  fadedAColorScheme: (value: Stitches.PropertyValue<'color'>) => ({
    backgroundColor: `$${value}3`,
    '&:hover': {
      backgroundColor: `$${value}4`,
    },
    '&:active': {
      backgroundColor: `$${value}5`,
    },
  }),
};
