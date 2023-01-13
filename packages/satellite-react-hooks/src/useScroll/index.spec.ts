import { MutableRefObject, RefObject } from 'react';

import {
  act,
  renderHook,
  WaitForNextUpdate,
} from '@testing-library/react-hooks';

import { describe, it, beforeEach, expect, vi } from 'vitest';

import { useRefStub, useRefMock } from '@satellite/tests';

import { updateScrollPosition, elementIsHtmlElement } from './helpers';
import { useBaseScroll, UseBaseScrollProps, UseBaseScrollReturn } from '.';

type LocalTestContext = {
  hookReturn: UseBaseScrollReturn;
  rerender: (props?: UseBaseScrollProps<HTMLElement> | undefined) => void;
  waitForNextUpdate: WaitForNextUpdate;
};

describe('useBaseScroll', () => {
  vi.mock('./helpers', () => ({
    updateScrollPosition: vi.fn(),
    elementIsHtmlElement: vi.fn().mockReturnValue(true),
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
          scroll: ref.current as RefObject<HTMLElement>,
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
  //   rerender,
  // }: LocalTestContext) => {
  //   const scroll = useRefMock() as MutableRefObject<HTMLElement>;

  //   rerender({ scroll, direction: 'left' });

  //   expect(updateScrollPosition).toHaveBeenCalled();
  // });
});
