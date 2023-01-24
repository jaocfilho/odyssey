import { Stitches } from '../types';

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

export const borderUtils = {
  ...borderLeftUtils,

  // Abbreviated border properties
  b: (value: Stitches.PropertyValue<'border'>) => ({
    border: value,
  }),

  br: (value: Stitches.PropertyValue<'border'>) => ({
    borderRightWidth: value,
  }),

  bt: (value: Stitches.PropertyValue<'border'>) => ({
    borderTopWidth: value,
  }),

  bb: (value: Stitches.PropertyValue<'border'>) => ({
    borderBottomWidth: value,
  }),

  bx: (value: Stitches.PropertyValue<'border'>) => ({
    bl: value,
    br: value,
  }),

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
