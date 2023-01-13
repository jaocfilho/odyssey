import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
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

type UseScrollProps = {
  initialScrollLeftValue?: number;
  initialScrollTopValue?: number;
};

export const useBaseScroll = <T extends HTMLElement>({
  scroll,
  direction,
  initialValue = 0,
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
  initialScrollLeftValue = 0,
  initialScrollTopValue = 0,
}: UseScrollProps) => {
  const scroll = useRef<T>(null);

  const [] = useBaseScroll({
    scroll,
    direction: 'left',
    initialValue: initialScrollLeftValue,
  });

  const [scrollLeftPosition, setScrollLeftPosition] = useState(
    initialScrollLeftValue
  );
  const [scrollTopPosition, setScrollTopPosition] = useState(
    initialScrollTopValue
  );

  const changeScrollLeftPosition = useCallback(
    (newValue: number) => setScrollLeftPosition(newValue),
    [setScrollLeftPosition]
  );
  const changeScrollTopPosition = useCallback(
    (newValue: number) => setScrollTopPosition(newValue),
    [setScrollTopPosition]
  );

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollLeft = scrollLeftPosition;
    }
  }, [scrollLeftPosition]);

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollTop = scrollTopPosition;
    }
  }, [scrollTopPosition]);

  return { changeScrollLeftPosition };
};
