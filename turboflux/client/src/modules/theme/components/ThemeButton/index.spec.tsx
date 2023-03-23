import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { beforeEach, vi, describe, it, expect, afterEach } from 'vitest';

import { useTheme } from '../../hooks/useTheme';
import { ThemeButton } from '.';

const alternateTheme = vi.fn();

const useThemeReturn = {
  alternateTheme,
};

vi.mock('../../hooks/useTheme', () => ({
  useTheme: vi.fn(() => useThemeReturn),
}));

describe('ThemeButton', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    render(<ThemeButton />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should callback `alternateTheme` on click', async () => {
    const container = screen.getByRole('button');
    await userEvent.click(container);

    expect(alternateTheme).toHaveBeenCalled();
  });
});
