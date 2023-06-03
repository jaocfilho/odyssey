import { render, cleanup } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, vi } from 'vitest';

import { BaseCreatePersonaButton } from '.';
import {
  assertButtonIsInTheDocument,
  assertFunctionIsCalledOnButtonClick,
} from '@odyssey/tests';

describe('BaseCreatePersonaButton', () => {
  const openDrawer = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    render(<BaseCreatePersonaButton openDrawer={openDrawer} />);

    assertButtonIsInTheDocument('Create new persona');
  });

  it('should callback openDrawer on click', async () => {
    render(<BaseCreatePersonaButton openDrawer={openDrawer} />);

    await assertFunctionIsCalledOnButtonClick('Create new persona', openDrawer);
  });
});
