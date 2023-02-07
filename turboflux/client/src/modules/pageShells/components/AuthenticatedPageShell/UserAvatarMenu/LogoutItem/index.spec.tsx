import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { beforeEach, vi, describe, it } from 'vitest';

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

  it('should render', () => {
    expect(screen.getByText('Log out')).toBeInTheDocument();
  });

  it('should callback `signOut` on click', async () => {
    const container = screen.getByText('Log out');
    await userEvent.click(container);

    expect(signOut).toHaveBeenCalled();
  });
});
