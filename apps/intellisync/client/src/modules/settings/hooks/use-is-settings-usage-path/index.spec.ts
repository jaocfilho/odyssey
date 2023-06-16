import { renderHook } from '@testing-library/react-hooks';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { usePathname } from 'next/navigation';

import { useIsSettingsUsagePath } from '.';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('useIsSettingsUsagePath', () => {
  const { result, rerender, unmount } = renderHook(() =>
    useIsSettingsUsagePath()
  );

  afterEach(() => {
    unmount();
  });

  it('should return true if the pathname is correct', () => {
    vi.mocked(usePathname).mockReturnValue('/dashboard/settings/usage');

    rerender();

    expect(result.current).toBeTruthy();
  });

  it('should return false if the pathname is incorrect', () => {
    vi.mocked(usePathname).mockReturnValue('/dashboard/settings');

    rerender();

    expect(result.current).toBeFalsy();
  });
});
