import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { assertButtonIsInTheDocument, clickButton } from '@odyssey/tests';
import { useProfile } from '@/modules/profiles/hooks/use-profile';
import { SubmitButton } from '.';

vi.mock('@/modules/profiles/hooks/use-profile', () => ({
  useProfile: vi.fn(() => ({
    data: {
      last_used_organization: 'any',
    },
  })),
}));

describe('SubmitButton', () => {
  const closeDrawer = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a submit button', () => {
    render(
      <SubmitButton closeDrawer={closeDrawer} isSubmitSuccessful={false} />
    );
    assertButtonIsInTheDocument('Save');
  });

  it('should submit the correct form', async () => {
    const onSubmit = vi.fn();

    render(
      <>
        <form id="createChatbotForm" onSubmit={onSubmit} />
        <SubmitButton closeDrawer={closeDrawer} isSubmitSuccessful={false} />
      </>
    );

    await clickButton('Save');

    expect(onSubmit).toHaveBeenCalled();
  });

  it('should callback closeDrawer if isSubmitSuccessful is true', () => {
    render(<SubmitButton closeDrawer={closeDrawer} isSubmitSuccessful />);

    expect(closeDrawer).toHaveBeenCalled();
  });

  it('should not be disabled if organization is loaded', () => {
    render(<SubmitButton closeDrawer={closeDrawer} isSubmitSuccessful />);

    const button = screen.getByRole('button', { name: 'Save' });

    expect(button).not.toBeDisabled();
  });

  it('should be disabled if organization is not loaded', () => {
    vi.mocked(useProfile).mockReturnValueOnce({
      data: {
        last_used_organization: null,
      },
    } as any);

    render(<SubmitButton closeDrawer={closeDrawer} isSubmitSuccessful />);

    const button = screen.getByRole('button', { name: 'Save' });

    expect(button).toBeDisabled();
  });
});
