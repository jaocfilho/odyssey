import { RefObject, useEffect, useRef } from 'react';

import { useNumber } from '../useNumber';
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

export type UseScrollReturn<T> = {
  scroll: RefObject<T>;
  changeScrollLeftPosition: (newValue: number) => void;
  scrollLeftPosition: number;
  changeScrollTopPosition: (newValue: number) => void;
  scrollTopPosition: number;
};

type UseScroll<T extends HTMLElement> = (
  props?: UseScrollProps
) => UseScrollReturn<T>;

export const useBaseScroll = <T extends HTMLElement>({
  scroll,
  direction,
  initialValue,
}: UseBaseScrollProps<T>): UseBaseScrollReturn => {
  const { number: scrollPosition, changeNumber: changeScrollPosition } =
    useNumber({ initialValue });

  useEffect(() => {
    const { current } = scroll;
    if (elementIsHtmlElement<T>(current)) {
      updateScrollPosition<T>(current, direction, scrollPosition);
    }
  }, [scroll, direction, scrollPosition]);

  return [scrollPosition, changeScrollPosition];
};

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
