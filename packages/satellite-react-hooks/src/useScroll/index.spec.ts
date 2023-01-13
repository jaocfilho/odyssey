import { RefObject } from 'react';

import { act, renderHook } from '@testing-library/react-hooks';

import { describe, it, beforeEach, expect, vi } from 'vitest';

import { updateScrollPosition, elementIsHtmlElement } from './helpers';
import { useBaseScroll, UseBaseScrollProps } from '.';

describe('useBaseScroll', () => {
  let current = {};
  const useRefMock = vi.fn(() => ({ current }));

  vi.mock('./helpers', () => ({
    updateScrollPosition: vi.fn(),
    elementIsHtmlElement: vi.fn(),
  }));

  const scroll = useRefMock() as RefObject<HTMLElement>;

  const { result, rerender } = renderHook(
    (props: UseBaseScrollProps<HTMLElement>) => useBaseScroll(props),
    {
      initialProps: {
        direction: 'left',
        scroll,
      },
    }
  );

  beforeEach(() => {
    vi.restoreAllMocks();

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

  it('should not call updateScrollPosition if current is not a html element', () => {
    vi.mocked(elementIsHtmlElement).mockReturnValueOnce(false);

    expect(updateScrollPosition).not.toBeCalled();
  });
});
