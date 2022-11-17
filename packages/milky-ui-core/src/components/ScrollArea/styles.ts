import type { ComponentProps } from "../../utils/types";

import * as ScrollArea from "@radix-ui/react-scroll-area";

import { styled } from "../../styles/stiches";

export const Root = styled(ScrollArea.Root, {});

export type ScrollAreaRootProps = ComponentProps<typeof Root>;

export const Viewport = styled(ScrollArea.Viewport, {
  wFull: true,
  hFull: true,
});

export type ScrollAreaViewportProps = ComponentProps<typeof Viewport>;

export const Scrollbar = styled(ScrollArea.Scrollbar, {});

export type ScrollAreaScrollbarProps = ComponentProps<typeof Scrollbar>;

export const Thumb = styled(ScrollArea.Thumb, {});

export type ScrollAreaThumbProps = ComponentProps<typeof Thumb>;

export const Corner = styled(ScrollArea.Corner, {});

export type ScrollAreaCornerProps = ComponentProps<typeof Corner>;
