import { renderHook } from '@testing-library/react-hooks';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { usePathname } from 'next/navigation';

import { useIsSettingsSubscriptionPath } from '.';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('useIsSettingsSubscriptionPath', () => {
  const { result, rerender, unmount } = renderHook(() =>
    useIsSettingsSubscriptionPath()
  );

  afterEach(() => {
    unmount();
  });

  it('should return true if the pathname is correct', () => {
    vi.mocked(usePathname).mockReturnValue('/dashboard/settings/subscription');

    rerender();

    expect(result.current).toBeTruthy();
  });

  it('should return false if the pathname is incorrect', () => {
    vi.mocked(usePathname).mockReturnValue('/dashboard/settings');

    rerender();

    expect(result.current).toBeFalsy();
  });
});
