import { cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, vi } from 'vitest';

import {
  assertButtonIsInTheDocument,
  assertFunctionIsCalledOnButtonClick,
} from '@odyssey/tests';
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
    render(<SubmitButton closeDrawer={closeDrawer} />);
    assertButtonIsInTheDocument('Save');
  });

  it('should render a submit button', async () => {
    render(<SubmitButton closeDrawer={closeDrawer} />);
    await assertFunctionIsCalledOnButtonClick('Save', closeDrawer);
  });
});
