import { renderHook } from '@testing-library/react-hooks';

import { describe, it, vi } from 'vitest';

import { useTheme } from 'next-themes';

import { useTheme as useThemeTest, useThemeBase, UseThemeBaseProps } from '.';

describe('useThemeBase', () => {
  let theme = '';
  const setTheme = vi.fn();

  const { result, rerender } = renderHook(
    (props: UseThemeBaseProps) => useThemeBase(props),
    {
      initialProps: {
        theme,
        setTheme,
      },
    }
  );

  beforeEach(() => {
    theme = '';
    vi.restoreAllMocks();
  });

  it('should pass `dark` to setTheme on setDarkTheme call', () => {
    result.current.setDarkTheme();
    expect(setTheme).toHaveBeenCalledWith('dark');
  });

  it('should pass `light` to setTheme on setLightTheme call', () => {
    result.current.setLightTheme();
    expect(setTheme).toHaveBeenCalledWith('light');
  });

  it('should call setLightTheme if theme is `dark` when alternateTheme is called', () => {
    theme = 'dark';

    rerender({ theme, setTheme });
    result.current.alternateTheme();

    expect(setTheme).toHaveBeenCalledWith('light');
  });

  it('should call setDarkTheme if theme is `light` when alternateTheme is called', () => {
    theme = 'light';

    rerender({ theme, setTheme });
    result.current.alternateTheme();

    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});

describe('useTheme', () => {
  vi.mock('next-themes', () => {
    const setTheme = vi.fn();
    const theme = '';

    const useTheme = vi.fn(() => ({
      theme,
      setTheme,
    }));

    return { useTheme, ThemeProvider: vi.fn() };
  });

  it('should call useTheme from next-themes', () => {
    renderHook(() => useThemeTest());
    expect(useTheme).toHaveBeenCalled();
  });
});
