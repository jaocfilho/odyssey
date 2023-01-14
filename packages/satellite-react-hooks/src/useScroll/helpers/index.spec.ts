import { MutableRefObject } from 'react';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { elementIsHtmlElement, updateScrollPosition } from '.';

describe('updateScrollPosition', () => {
  const useRefMock = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should change `scrollLeft` property when direction is `left`', () => {
    useRefMock.mockReturnValueOnce({
      current: { scrollLeft: 0 },
    });
    const scroll = useRefMock() as MutableRefObject<HTMLElement>;

    updateScrollPosition(scroll.current, 'left', 50);

    expect(scroll.current.scrollLeft).toBe(50);
  });

  it('should change `scrollTop` property when direction is `top`', () => {
    useRefMock.mockReturnValueOnce({
      current: { scrollTop: 0 },
    });
    const scroll = useRefMock() as MutableRefObject<HTMLElement>;

    updateScrollPosition(scroll.current, 'top', 50);

    expect(scroll.current.scrollTop).toBe(50);
  });
});

describe('elementIsHtmlElement', () => {
  it('should return false if element is null', () => {
    const isHtmlElement = elementIsHtmlElement<HTMLDivElement>(null);
    expect(isHtmlElement).toBeFalsy();
  });
});
