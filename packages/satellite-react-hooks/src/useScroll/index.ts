import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type UseBaseScrollProps<T extends HTMLElement> = {
  scroll: MutableRefObject<T>;
  direction: 'scrollLeft' | 'scrollTop';
  initialValue?: number;
};

type UseScrollProps = {
  initialScrollLeftValue?: number;
  initialScrollTopValue?: number;
};

export const useBaseScroll = <T extends HTMLElement>({
  scroll,
  direction,
  initialValue = 0,
}: UseBaseScrollProps<T>) => {
  const [scrollPosition, setScrollPosition] = useState(initialValue);

  const changeScrollPosition = useCallback(
    (newValue: number) => setScrollPosition(newValue),
    [setScrollPosition]
  );

  useEffect(() => {
    if (scroll.current) {
      scroll.current[direction] = scrollPosition;
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
