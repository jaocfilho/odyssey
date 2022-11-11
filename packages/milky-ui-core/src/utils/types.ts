import { Color } from "@milky-ui/tokens";

import { Stitches, Css } from "../styles/stiches/types";

export type ComponentProps<T> = Stitches.ComponentProps<T>;

// color variant types
export type ColorVariant = {
  [color in Color]: Css;
}

export type CompoundColorVariant = {
  color: Color;
  css: Css;
};
