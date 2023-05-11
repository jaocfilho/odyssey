import { RefObject, useEffect, useRef } from 'react';

import { useNumberState } from '../use-number-state';
import { updateScrollPosition, elementIsHtmlElement } from './helpers';

export type UseBaseScrollProps<T extends HTMLElement> = {
  scroll: RefObject<T>;
  direction: 'left' | 'top';
  initialValue?: number;
};

export type UseBaseScrollReturn = [
  scrollPosition: number,
  changeScrollPosition: (newValue: number) => void
];

export type UseScrollProps = {
  initialScrollLeftValue?: number;
  initialScrollTopValue?: number;
};

/**
 * @typeParam T - Type of the HtmlElement
 */
export type UseScrollReturn<T> = {
  scroll: RefObject<T>;
  changeScrollLeftPosition: (newValue: number) => void;
  scrollLeftPosition: number;
  changeScrollTopPosition: (newValue: number) => void;
  scrollTopPosition: number;
};

export type UseScroll<T extends HTMLElement> = (
  props?: UseScrollProps
) => UseScrollReturn<T>;

export const useBaseScroll = <T extends HTMLElement>({
  scroll,
  direction,
  initialValue,
}: UseBaseScrollProps<T>): UseBaseScrollReturn => {
  const { number: scrollPosition, changeNumber: changeScrollPosition } =
    useNumberState({ initialValue });

  useEffect(() => {
    const { current } = scroll;
    if (elementIsHtmlElement<T>(current)) {
      updateScrollPosition<T>(current, direction, scrollPosition);
    }
  }, [scroll, direction, scrollPosition]);

  return [scrollPosition, changeScrollPosition];
};

/**
 * A hook that controls the scrollbars of a component
 *
 * @template T - Type of the HtmlElement
 *
 * @param initialScrollLeftValue - The initial value of the left scroll position
 * @param initialScrollTopValue - The initial value of the top scroll position
 *
 * @return scroll - A ref object that points to the element that the scrollbar controls.
 * @return changeScrollLeftPosition - A function that sets the position of the horizontal scrollbar.
 * @return scrollLeftPosition - the current position of the horizontal scrollbar
 * @return changeScrollTopPosition - A function that sets the position of the vertical scrollbar.
 * @return scrollTopPosition - the current position of the vertical scrollbar.
 *
 * @example
 *
 * const { scroll, changeScrollLeftPosition } = useScroll<HTMLDivElement>();
 *
 */
export const useScroll = <T extends HTMLElement>({
  initialScrollLeftValue,
  initialScrollTopValue,
}: UseScrollProps = {}): UseScrollReturn<T> => {
  const scroll = useRef<T>(null);

  const [scrollLeftPosition, changeScrollLeftPosition] = useBaseScroll({
    scroll,
    direction: 'left',
    initialValue: initialScrollLeftValue,
  });

  const [scrollTopPosition, changeScrollTopPosition] = useBaseScroll({
    scroll,
    direction: 'top',
    initialValue: initialScrollTopValue,
  });

  return {
    scroll,
    changeScrollLeftPosition,
    scrollLeftPosition,
    changeScrollTopPosition,
    scrollTopPosition,
  };
};
