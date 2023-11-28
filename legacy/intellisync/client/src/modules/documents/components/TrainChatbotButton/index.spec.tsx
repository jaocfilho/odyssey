import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TrainChatbotButton } from '.';
import { generateRandomDocument } from '../../entities/factories';
import { useTrainChatbot } from '../../hooks/use-train-chatbot';
import {
  assertButtonIsInTheDocument,
  assertFunctionIsCalledOnButtonClick,
} from '@odyssey/tests';

vi.mock('../../hooks/use-train-chatbot', () => ({
  useTrainChatbot: vi.fn(),
}));

describe('TrainChatbotButton', () => {
  const onSuccess = vi.fn();

  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    const documents = [generateRandomDocument()];

    render(
      <TrainChatbotButton
        documents={documents}
        chatbotId="anyId"
        onSuccess={onSuccess}
      />
    );

    assertButtonIsInTheDocument('Train chatbot');
  });

  it('should call the mutate function on button click', async () => {
    const mutate = vi.fn();
    // @ts-expect-error
    vi.mocked(useTrainChatbot).mockReturnValue({ mutate });

    const documents = [generateRandomDocument()];

    render(
      <TrainChatbotButton
        documents={documents}
        chatbotId="anyId"
        onSuccess={onSuccess}
      />
    );

    await assertFunctionIsCalledOnButtonClick('Train chatbot', mutate);
  });
});
