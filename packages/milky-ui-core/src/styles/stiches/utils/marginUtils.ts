import { Stitches } from "../types";

export const marginPropertiesAbbreviationsUtils = {
  // Abbreviated margin properties
  m: (value: Stitches.PropertyValue<"margin">) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<"margin">) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<"margin">) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<"margin">) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<"margin">) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<"margin">) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<"margin">) => ({
    marginTop: value,
    marginBottom: value,
  }),
};

export const marginUtils = {
  ...marginPropertiesAbbreviationsUtils,
};
