import { styled } from '../../styles/stiches';
import { Box } from '../Box';
import { createGapVariants } from '../../utils';

export const FlexContainer = styled(Box, {
  display: 'flex',

  variants: {
    direction: {
      column: { flexDirection: 'column' },
      row: { flexDirection: 'row' },
    },

    noWrap: {
      true: {
        flexWrap: 'nowrap',
      },
    },

    noShrink: {
      true: {
        flexShrink: 0,
      },
    },

    ...createGapVariants(),
  },

  defaultVariants: {
    direction: 'row',
  },
});
