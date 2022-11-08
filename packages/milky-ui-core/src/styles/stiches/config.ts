import { createStitches } from "@stitches/react";

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
} from "@milky-ui/tokens";

import {
  borderUtils,
  colorUtils,
  marginUtils,
  paddingUtils,
  sizeUtils,
} from "./utils";

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

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",

    background: "$gray1",
    color: "$gray11",

    fontFamily: "$default",
  },
});
