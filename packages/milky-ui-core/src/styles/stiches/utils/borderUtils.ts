import { Stitches } from '../types';

const borderBasicUtils = {
  b: (value: Stitches.PropertyValue<'borderWidth'>) => ({
    borderWidth: value,
  }),

  bStyle: (value: Stitches.PropertyValue<'borderStyle'>) => ({
    borderStyle: value,
  }),

  bColor: (value: Stitches.PropertyValue<'borderColor'>) => ({
    borderColor: value,
  }),
};

const borderLeftUtils = {
  bl: (value: Stitches.PropertyValue<'borderLeftWidth'>) => ({
    borderLeftWidth: value,
  }),

  blStyle: (value: Stitches.PropertyValue<'borderLeftStyle'>) => ({
    borderLeftStyle: value,
  }),

  blColor: (value: Stitches.PropertyValue<'borderLeftColor'>) => ({
    borderLeftColor: value,
  }),
};

const borderRightUtils = {
  br: (value: Stitches.PropertyValue<'borderRightWidth'>) => ({
    borderRightWidth: value,
  }),

  brStyle: (value: Stitches.PropertyValue<'borderRightStyle'>) => ({
    borderRightStyle: value,
  }),

  brColor: (value: Stitches.PropertyValue<'borderRightColor'>) => ({
    borderRightColor: value,
  }),
};

const borderTopUtils = {
  bt: (value: Stitches.PropertyValue<'borderTop'>) => ({
    borderTopWidth: value,
  }),

  btStyle: (value: Stitches.PropertyValue<'borderTopStyle'>) => ({
    borderTopStyle: value,
  }),

  btColor: (value: Stitches.PropertyValue<'borderTopColor'>) => ({
    borderTopColor: value,
  }),
};

const borderBottomUtils = {
  bb: (value: Stitches.PropertyValue<'borderBottom'>) => ({
    borderBottomWidth: value,
  }),

  bbStyle: (value: Stitches.PropertyValue<'borderBottomStyle'>) => ({
    borderBottomStyle: value,
  }),

  bbColor: (value: Stitches.PropertyValue<'borderBottomColor'>) => ({
    borderBottomColor: value,
  }),
};

const borderXUtils = {
  bx: (
    value:
      | Stitches.PropertyValue<'borderRightWidth'>
      | Stitches.PropertyValue<'borderLeftWidth'>
  ) => ({
    borderRightWidth: value,
    borderLeftWidth: value,
  }),

  bxStyle: (
    value:
      | Stitches.PropertyValue<'borderRightStyle'>
      | Stitches.PropertyValue<'borderLeftStyle'>
  ) => ({
    borderRightStyle: value,
    borderLeftStyle: value,
  }),

  bxColor: (
    value:
      | Stitches.PropertyValue<'borderRightColor'>
      | Stitches.PropertyValue<'borderLeftColor'>
  ) => ({
    borderRightColor: value,
    borderLeftColor: value,
  }),
};

export const borderUtils = {
  ...borderBasicUtils,
  ...borderLeftUtils,
  ...borderRightUtils,
  ...borderTopUtils,
  ...borderBottomUtils,
  ...borderXUtils,

  borderSolid: (value: boolean) => ({
    borderStyle: 'solid',
  }),

  // Abbreviated border radius properties
  roundedLeft: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  }),

  roundedRight: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
  }),

  rounded: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    roundedRight: value,
    roundedLeft: value,
  }),

  roundedFull: (value: boolean) => ({
    roundedRight: 9999,
    roundedLeft: 9999,
  }),

  roundedNone: (value: boolean) => ({
    roundedRight: 0,
    roundedLeft: 0,
  }),
};
