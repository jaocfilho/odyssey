import { Color } from "@milky-ui/tokens";

import type * as Stitches from "@stitches/react";

import { config } from "./config";

export type { Stitches };
export type Css = Stitches.CSS<typeof config>;

// color types
export type ColorVariant = {
  [color in Color]: Css;
}

export type CompoundColorVariant = {
  color: Color;
  css: Css;
};