import type { ReactNode } from "react";

import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaRootProps,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./styles";

type ScrollAreaProps = {
  children: ReactNode;
  css: ScrollAreaRootProps["css"];
};

export const ScrollArea = ({ children, css }: ScrollAreaProps) => {
  return (
    <ScrollAreaRoot css={css}>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};
