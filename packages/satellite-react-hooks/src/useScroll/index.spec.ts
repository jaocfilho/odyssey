import { MutableRefObject } from 'react';

import {
  act,
  renderHook,
  WaitForNextUpdate,
} from '@testing-library/react-hooks';

import { describe, it, beforeEach, expect, vi } from 'vitest';

import { useRefStub, useRefMock } from '@satellite/tests';

import {
  useBaseScroll,
  UseBaseScrollProps,
  UseBaseScrollReturn,
  updateScrollPosition,
} from '.';

type LocalTestContext = {
  hookReturn: UseBaseScrollReturn;
  rerender: (props?: UseBaseScrollProps<HTMLElement> | undefined) => void;
  waitForNextUpdate: WaitForNextUpdate;
};

describe('updateScrollPosition', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should change `scrollLeft` property when direction is `left`', () => {
    useRefMock.mockReturnValueOnce({
      current: { scrollLeft: 0 },
    });
    const scroll = useRefMock() as MutableRefObject<HTMLElement>;

    updateScrollPosition(scroll, 'left', 50);

    expect(scroll.current.scrollLeft).toBe(50);
  });

  it('should change `scrollTop` property when direction is `top`', () => {
    useRefMock.mockReturnValueOnce({
      current: { scrollTop: 0 },
    });
    const scroll = useRefMock() as MutableRefObject<HTMLElement>;

    updateScrollPosition(scroll, 'top', 50);

    expect(scroll.current.scrollTop).toBe(50);
  });
});

describe('useBaseScroll', () => {
  const updateScrollPosition = vi.fn();

  vi.mock('.', () => ({
    updateScrollPosition,
  }));

  beforeEach<LocalTestContext>(async (context) => {
    vi.resetAllMocks();

    const { rerender: refRerender, result: ref } = useRefStub;
    refRerender();

    const { result, rerender, waitForNextUpdate } = renderHook(
      (props: UseBaseScrollProps<HTMLElement>) => useBaseScroll(props),
      {
        initialProps: {
          direction: 'left',
          scroll: ref.current as MutableRefObject<HTMLElement>,
        },
      }
    );

    // injects hookReturn inside the context of every test
    context.hookReturn = result.current;
    context.rerender = rerender;
    context.waitForNextUpdate = waitForNextUpdate;
  });

  it('should return an array with 0 as first element', ({
    hookReturn,
  }: LocalTestContext) => {
    const [scrollPosition, _] = hookReturn;
    expect(scrollPosition).toBe(0);
  });

  it('should return an array with a function as second element', ({
    hookReturn,
  }: LocalTestContext) => {
    const [_, changeScrollPosition] = hookReturn;
    expect(typeof changeScrollPosition === 'function').toBeTruthy();
  });

  // it('should change scrollPosition when changeScrollPosition is called', async ({
  //   hookReturn,
  //   waitForNextUpdate,
  // }: LocalTestContext) => {
  //   const [scrollPosition, changeScrollPosition] = hookReturn;

  //   const newValue = 50;

  //   changeScrollPosition(newValue);
  //   await waitForNextUpdate();
  //   expect(scrollPosition).toBe(newValue);
  // });

  // it('should call `updateScrollPosition` on render', ({
  //   hookReturn,
  //   waitForNextUpdate,
  // }: LocalTestContext) => {
  //   const [scrollPosition, changeScrollPosition] = hookReturn;
  //   expect(updateScrollPosition).toHaveBeenCalled();
  // });
});
