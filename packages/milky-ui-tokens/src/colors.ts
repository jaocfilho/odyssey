import {
  gray,
  grayDark,
  red,
  redDark,
  green,
  greenDark,
  crimson,
  crimsonDark,
  indigo,
  indigoDark,
  violet,
  violetDark,
  purple,
  purpleDark,
  blue,
  blueDark,
  cyan,
  cyanDark,
  teal,
  tealDark,
  plum,
  plumDark,
  whiteA,
  blackA,
} from "@radix-ui/colors";

export const colors = {
  ...gray,
  ...red,
  ...green,
  ...crimson,
  ...purple,
  ...blue,
  ...cyan,
  ...indigo,
  ...violet,
  ...teal,
  ...plum,
  ...whiteA,
  ...blackA,
};

export const darkColors = {
  ...grayDark,
  ...redDark,
  ...greenDark,
  ...crimsonDark,
  ...purpleDark,
  ...blueDark,
  ...cyanDark,
  ...indigoDark,
  ...violetDark,
  ...tealDark,
  ...plumDark,
  ...whiteA,
  ...blackA,
};

export const colorsArray = [
  "gray",
  "red",
  "green",
  "crimson",
  "purple",
  "blue",
  "cyan",
  "indigo",
  "violet",
  "teal",
  "plum",
] as const;

// color types
export type Color = typeof colorsArray[number];
export type Colors = readonly Color[];
