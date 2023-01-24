import { createStitches } from '@stitches/react';

import {
  borderWidth,
  colors,
  darkColors,
  space,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  letterSpacings,
} from '@milky-ui/tokens';

import {
  borderUtils,
  colorUtils,
  marginUtils,
  paddingUtils,
  sizeUtils,
} from './utils';

export const {
  styled,
  createTheme,
  theme: lightTheme,
  globalCss,
  config,
} = createStitches({
  theme: {
    borderWidth,
    space,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    colors,
    letterSpacings,
  },

  utils: {
    ...marginUtils,
    ...paddingUtils,
    ...borderUtils,
    ...sizeUtils,
    ...colorUtils,
  },
});

export const darkTheme = createTheme({
  colors: darkColors,
});
