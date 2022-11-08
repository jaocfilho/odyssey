import { createColorVariants, createCompoundColorVariants } from "../../utils";
import { styled } from "../../styles/stiches";

export const BaseButton = styled("button", {
  // css reset
  all: "unset",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  fontFamily: "inherit",
  fontWeight: "$medium",

  rounded: "$xs",

  color: "$gray11",

  variants: {
    color: createColorVariants({
      variantFormat: (color) => ({}),
    }),

    variant: {
      solid: {},
      outline: {},
      faded: {},
      fadedA: {},
    },

    size: {
      small: {
        height: "$space$4",
        fontSize: "$sm",
      },

      medium: {
        height: "$space$5",
        fontSize: "$md",
      },

      large: {
        height: "$space$6",
        fontSize: "$lg",
      },
    },
  },

  compoundVariants: [
    ...createCompoundColorVariants({
      variantFormat: (color) => ({
        variant: "solid",
        css: {
          solidTextColor: true,
          solidColorScheme: color,
        },
      }),
    }),

    ...createCompoundColorVariants({
      variantFormat: (color) => ({
        variant: "outline",
        css: {
          outlineTextColor: color,
          outlineColorScheme: color,
        },
      }),
    }),

    ...createCompoundColorVariants({
      variantFormat: (color) => ({
        variant: "faded",
        css: {
          fadedTextColor: color,
          fadedColorScheme: color,
        },
      }),
    }),

    ...createCompoundColorVariants({
      variantFormat: (color) => ({
        variant: "fadedA",
        css: {
          fadedATextColor: color,
          fadedAColorScheme: color,
        },
      }),
    }),
  ],

  defaultVariants: {
    color: "gray",
    variant: "solid",
    size: "medium",
  },
});

export const Button = styled(BaseButton, {
  py: "$2",
  px: "$4",
});
