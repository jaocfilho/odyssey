import { describe, it, vi, expect, afterEach, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { useIsCurrentPersonaPath } from '@/modules/personas/hooks/use-is-current-persona-path';
import { PersonasListItem } from '.';

vi.mock('@/modules/personas/hooks/use-is-current-persona-path', () => ({
  useIsCurrentPersonaPath: vi.fn(() => true),
}));

describe('PersonasListItem', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the name of the item', () => {
    render(<PersonasListItem name="anyName" id="anyId" />);
    expect(screen.getByText('anyName')).toBeInTheDocument();
  });

  it('should has the correct styles when it is not the current item', () => {
    vi.mocked(useIsCurrentPersonaPath).mockReturnValue(false);

    render(<PersonasListItem name="anyName" id="anyId" />);
    expect(screen.getByText('anyName')).toHaveClass('dark:text-zinc-600');
  });

  it('should has the correct styles when it is the current item', () => {
    render(<PersonasListItem name="anyName" id="anyId" />);
    expect(screen.getByText('anyName')).toHaveClass('dark:text-emerald-500');
  });
});
