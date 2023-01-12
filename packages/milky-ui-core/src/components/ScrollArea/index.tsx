'use client';

import type { ReactNode } from 'react';

import { Css } from '../../styles/stiches';

import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewportProps,
  ScrollAreaViewport,
} from './styles';

type ScrollAreaProps = {
  children: ReactNode;
  width?: Css['width'];
  height?: Css['height'];
  onScroll?: ScrollAreaViewportProps['onScroll'];
};

/**
 * Augments native scroll functionality for custom,
 * cross-browser styling.
 *
 * @reference https://www.radix-ui.com/docs/primitives/components/scroll-area
 */
export const ScrollArea = ({
  children,
  height,
  width,
  onScroll,
}: ScrollAreaProps) => {
  return (
    <ScrollAreaRoot css={{ height, width }}>
      <ScrollAreaViewport onScroll={onScroll}>{children}</ScrollAreaViewport>
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
