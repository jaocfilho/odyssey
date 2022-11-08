import { colorsArray } from "@milky-ui/tokens";

import { config } from "./config";

import type * as Stitches from "@stitches/react";

export type { Stitches };
export type Css = Stitches.CSS<typeof config>;

export type Color = typeof colorsArray[number];
export type Colors = readonly Color[];
export type ColorVariant = {
  [color in Color]: Css;
}

export type CompoundColorVariant = {
  color: Color;
  css: Css;
};