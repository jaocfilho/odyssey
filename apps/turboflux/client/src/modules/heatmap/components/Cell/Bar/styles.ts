import { Flex, styled, createColorVariants, ComponentProps } from 'milky-ui';

export const BarContainer = styled(Flex, {
  // Locally scoped tokens
  $$heatmapCellRounded: '$space$1',
  $$heatmapCellMarginX: '$space$4',

  width: '100%',
  height: '100%',

  variants: {
    type: {
      starting: {
        roundedLeft: '$$heatmapCellRounded',
        ml: '$$heatmapCellMarginX',
      },
      progress: {},
      ending: {
        roundedRight: '$$heatmapCellRounded',
        mr: '$$heatmapCellMarginX',
      },
      solo: {
        rounded: '$$heatmapCellRounded',
        mx: '$$heatmapCellMarginX',
      },
      empty: {
        display: 'none',
      },
    },

    color: createColorVariants({
      variantFormat: (color) => ({
        solidColorScheme: color,
      }),
    }),
  },

  defaultVariants: {
    color: 'gray',
  },
});

export type BarContainerProps = ComponentProps<typeof BarContainer>;
