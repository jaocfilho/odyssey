import { useRefMock } from '@satellite/tests';
import { MutableRefObject } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { updateScrollPosition } from '.';

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
