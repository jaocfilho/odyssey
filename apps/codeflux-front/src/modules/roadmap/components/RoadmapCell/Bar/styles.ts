import { Flex, styled, createColorVariants, ComponentProps } from "milky-ui";

export const BarContainer = styled(Flex, {
  // Locally scoped tokens
  $$roadmapCellRounded: "$space$1",

  width: "100%",
  height: "100%",

  variants: {
    type: {
      starting: {
        roundedLeft: "$$roadmapCellRounded",
      },
      progress: {},
      ending: {
        roundedRight: "$$roadmapCellRounded",
      },
      solo: {
        rounded: "$$roadmapCellRounded",
      },
    },

    color: createColorVariants({
      variantFormat: (color) => ({
        solidColorScheme: color,
      }),
    }),
  },

  defaultVariants: {
    color: "gray",
  },
});

export type BarContainerProps = ComponentProps<typeof BarContainer>;
