import type { ComponentProps } from "../../utils/types";

import { styled } from "../../styles/stiches";

export const TextElement = styled("p", {
    // css reset
    all: "unset",
});

export type TextElementProps = ComponentProps<typeof TextElement>;
