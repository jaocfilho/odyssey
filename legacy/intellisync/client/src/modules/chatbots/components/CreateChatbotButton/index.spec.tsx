import { render, cleanup } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, vi } from 'vitest';

import { BaseCreateChatbotButton } from '.';
import {
  assertButtonIsInTheDocument,
  assertFunctionIsCalledOnButtonClick,
} from '@odyssey/tests';

describe('BaseCreateChatbotButton', () => {
  const openDrawer = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    render(<BaseCreateChatbotButton openDrawer={openDrawer} />);

    assertButtonIsInTheDocument('Create a new chatbot');
  });

  it('should callback openDrawer on click', async () => {
    render(<BaseCreateChatbotButton openDrawer={openDrawer} />);

    await assertFunctionIsCalledOnButtonClick(
      'Create a new chatbot',
      openDrawer
    );
  });
});
