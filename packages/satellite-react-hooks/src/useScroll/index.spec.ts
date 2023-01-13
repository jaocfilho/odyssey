import { RefObject } from 'react';

import { act, renderHook } from '@testing-library/react-hooks';

import { describe, it, beforeEach, expect, vi } from 'vitest';

import { useRefStub, useRefMock } from '@satellite/tests';

import { updateScrollPosition, elementIsHtmlElement } from './helpers';
import { useBaseScroll, UseBaseScrollProps } from '.';

describe('useBaseScroll', () => {
  vi.mock('./helpers', () => ({
    updateScrollPosition: vi.fn(),
    elementIsHtmlElement: vi.fn().mockReturnValue(true),
  }));

  const { rerender: refRerender, result: ref } = useRefStub;

  const { result, rerender } = renderHook(
    (props: UseBaseScrollProps<HTMLElement>) => useBaseScroll(props),
    {
      initialProps: {
        direction: 'left',
        scroll: ref.current as RefObject<HTMLElement>,
      },
    }
  );

  beforeEach(() => {
    vi.resetAllMocks();

    refRerender();
    rerender();
  });

  it('should return an array with 0 as first element', () => {
    const [scrollPosition, _] = result.current;
    expect(scrollPosition).toBe(0);
  });

  it('should return an array with a function as second element', () => {
    const [_, changeScrollPosition] = result.current;
    expect(typeof changeScrollPosition).toBe('function');
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
