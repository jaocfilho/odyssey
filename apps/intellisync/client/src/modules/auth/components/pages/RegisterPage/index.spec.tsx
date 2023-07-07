import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { RegisterPage } from '.';
import { assertButtonIsInTheDocument, clickButton } from '@odyssey/tests';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: () => ({
    supabase: { auth: { signUp: vi.fn() } },
  }),
}));

describe('RegisterPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the email input', () => {
    render(<RegisterPage />);

    const input = screen.getByLabelText('Email address');
    expect(input).toBeInTheDocument();
  });

  it('should render the password input', () => {
    render(<RegisterPage />);

    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument();
  });

  it('should render the sign up button', () => {
    render(<RegisterPage />);

    assertButtonIsInTheDocument('Sign up');
  });

  it('should not submit the form if the email is invalid', async () => {
    render(<RegisterPage />);

    const input = screen.getByLabelText('Email address');

    await userEvent.type(input, 'invalid-email');
    clickButton('Sign up');

    expect(input).toBeInvalid();
  });

  it('should not submit the form if the password is empty', async () => {
    render(<RegisterPage />);

    const input = screen.getByLabelText('Password');

    await clickButton('Sign up');

    expect(input).toBeInvalid();
  });
});
