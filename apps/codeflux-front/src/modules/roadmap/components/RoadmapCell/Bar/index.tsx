import { Flex, styled, createColorVariants, ComponentProps } from "milky-ui";

export const Bar = styled(Flex, {
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

export type BarProps = ComponentProps<typeof Bar>;
