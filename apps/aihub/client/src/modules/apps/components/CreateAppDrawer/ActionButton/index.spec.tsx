import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ActionButton } from '.';

describe('ActionButton', () => {
  const closeDrawer = vi.fn();
  const submitForms = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    render(
      <ActionButton
        submitForms={submitForms}
        closeDrawer={closeDrawer}
        createAppIsSubmited={false}
        refinementIsSubmited={false}
      />
    );
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('should call submitForms on click', async () => {
    render(
      <ActionButton
        submitForms={submitForms}
        closeDrawer={closeDrawer}
        createAppIsSubmited={false}
        refinementIsSubmited={false}
      />
    );
    const button = screen.getByText('Save');

    await userEvent.click(button);

    expect(submitForms).toHaveBeenCalled();
  });

  it('should call closeDrawer function when both createAppIsSubmited and refinementIsSubmited are true', () => {
    render(
      <ActionButton
        submitForms={submitForms}
        closeDrawer={closeDrawer}
        createAppIsSubmited={true}
        refinementIsSubmited={true}
      />
    );

    expect(closeDrawer).toHaveBeenCalled();
  });

  it('should not call closeDrawer function when createAppIsSubmited is false', () => {
    render(
      <ActionButton
        submitForms={submitForms}
        closeDrawer={closeDrawer}
        createAppIsSubmited={false}
        refinementIsSubmited={true}
      />
    );

    expect(closeDrawer).not.toHaveBeenCalled();
  });

  it('should not call closeDrawer function when refinementIsSubmited is false', () => {
    render(
      <ActionButton
        submitForms={submitForms}
        closeDrawer={closeDrawer}
        createAppIsSubmited={true}
        refinementIsSubmited={false}
      />
    );

    expect(closeDrawer).not.toHaveBeenCalled();
  });
});
