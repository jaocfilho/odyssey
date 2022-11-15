import { Color } from "@milky-ui/tokens";

import { Stitches, Css } from "../styles/stiches/types";

export type ComponentProps<T> = Stitches.ComponentProps<T>;

// color variant types
export type TColor = Color;
export type ColorVariant = {
  [color in TColor]: Css;
}

export type CompoundColorVariant = {
  color: TColor;
  css: Css;
};
