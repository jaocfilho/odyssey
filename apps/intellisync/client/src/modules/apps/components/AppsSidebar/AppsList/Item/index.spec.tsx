import { describe, it, vi, expect, afterEach, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { useIsCurrentApp } from '@/modules/apps/hooks/use-is-current-app';
import { Item } from '.';

vi.mock('@/modules/apps/hooks/use-is-current-app', () => ({
  useIsCurrentApp: vi.fn(() => true),
}));

describe('Item', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the name of the item', () => {
    render(<Item name="anyName" id="anyId" />);
    expect(screen.getByText('anyName')).toBeInTheDocument();
  });

  it('should has the correct styles when it is not the current item', () => {
    vi.mocked(useIsCurrentApp).mockReturnValue(false);

    render(<Item name="anyName" id="anyId" />);
    expect(screen.getByText('anyName')).toHaveClass('dark:text-zinc-600');
  });

  it('should has the correct styles when it is the current item', () => {
    render(<Item name="anyName" id="anyId" />);
    expect(screen.getByText('anyName')).toHaveClass('dark:text-emerald-500');
  });
});
