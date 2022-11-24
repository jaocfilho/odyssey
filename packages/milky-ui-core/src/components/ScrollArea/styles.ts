import type { ComponentProps } from "../../utils/types";

import * as ScrollArea from "@radix-ui/react-scroll-area";

import { styled } from "../../styles/stiches";

const SCROLLBAR_SIZE = 10;

export const ScrollAreaRoot = styled(ScrollArea.Root, {
  borderRadius: "inherit",
  overflow: "hidden",
});

export type ScrollAreaRootProps = ComponentProps<typeof ScrollAreaRoot>;

export const ScrollAreaViewport = styled(ScrollArea.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

export type ScrollAreaViewportProps = ComponentProps<typeof ScrollAreaViewport>;

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
  display: "flex",
  // ensures no selection
  userSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: 2,
  background: "$black6",
  transition: "background 160ms ease-out",
  "&:hover": { background: "$blackA8" },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
});

export type ScrollAreaScrollbarProps = ComponentProps<
  typeof ScrollAreaScrollbar
>;

export const ScrollAreaThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  background: "$gray9",
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
});

export type ScrollAreaThumbProps = ComponentProps<typeof ScrollAreaThumb>;

export const ScrollAreaCorner = styled(ScrollArea.Corner, {});

export type ScrollAreaCornerProps = ComponentProps<typeof ScrollAreaCorner>;
