import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { beforeEach, vi, describe, it, afterEach, expect } from 'vitest';

import { signOut } from 'next-auth/react';

import { DropdownMenuOpenWrapper } from 'milky-ui';
import { LogoutItem } from '.';

vi.mock('next-auth/react', () => ({
  signOut: vi.fn(),
}));

describe('LogoutItem', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    render(<LogoutItem />, { wrapper: DropdownMenuOpenWrapper });
  });

  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    expect(screen.getByText('Log out')).toBeInTheDocument();
  });

  it('should callback `signOut` on click', async () => {
    const container = screen.getByText('Log out');
    await userEvent.click(container);

    expect(signOut).toHaveBeenCalled();
  });
});
