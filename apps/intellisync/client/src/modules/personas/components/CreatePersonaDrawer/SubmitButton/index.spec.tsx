import { cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { assertButtonIsInTheDocument, clickButton } from '@odyssey/tests';
import { SubmitButton } from '.';

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
        <form id="createPersonaForm" onSubmit={onSubmit} />
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
});
