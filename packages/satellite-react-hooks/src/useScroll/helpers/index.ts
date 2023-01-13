import { MutableRefObject } from 'react';

/** Helper function meant to be used by `useBaseScroll` */
export const updateScrollPosition = <T extends HTMLElement>(
  scroll: MutableRefObject<T>,
  direction: 'left' | 'top',
  value: number
) => {
  if (direction === 'left') {
    scroll.current.scrollLeft = value;
  }

  if (direction === 'top') {
    scroll.current.scrollTop = value;
  }

  return scroll;
};
