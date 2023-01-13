import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export type UseBaseScrollProps<T extends HTMLElement> = {
  scroll: MutableRefObject<T>;
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

export const useBaseScroll = <T extends HTMLElement>({
  scroll,
  direction,
  initialValue = 0,
}: UseBaseScrollProps<T>): UseBaseScrollReturn => {
  const [scrollPosition, setScrollPosition] = useState(initialValue);

  const changeScrollPosition = useCallback(
    (newValue: number) => setScrollPosition(newValue),
    [setScrollPosition]
  );

  useEffect(() => {
    if (scroll.current) {
      updateScrollPosition(scroll, direction, scrollPosition);
    }
  }, [scroll, direction, scrollPosition]);

  return [scrollPosition, changeScrollPosition];
};

export const useScroll = <T extends HTMLElement>({
  initialScrollLeftValue = 0,
  initialScrollTopValue = 0,
}: UseScrollProps) => {
  const [scrollLeftPosition, setScrollLeftPosition] = useState(
    initialScrollLeftValue
  );
  const [scrollTopPosition, setScrollTopPosition] = useState(
    initialScrollTopValue
  );

  const scroll = useRef<T>();

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
