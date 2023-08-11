import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { approximateTokenUsage, Content } from '.';
import { generateRandomDocument } from '@/modules/documents/entities/factories';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';
import { useGetCurrentChatbotId } from '@/modules/chatbots/hooks/use-get-current-chatbot-id';
import { useTrainChatbot } from '@/modules/documents/hooks/use-train-chatbot';
import { useStorageTokens } from '@/modules/storage-tokens/hooks/use-storage-tokens';
import {
  assertButtonIsInTheDocument,
  assertFunctionIsCalledOnButtonClick,
  assertObjectProperties,
} from '@odyssey/tests';

vi.mock('@/modules/storage-tokens/hooks/use-storage-tokens', () => ({
  useStorageTokens: vi.fn(() => ({
    data: {
      remaining_storage_tokens: 0,
    },
  })),
}));

vi.mock('@/modules/navigation/hooks/use-navigation', () => ({
  useNavigation: vi.fn(() => ({
    redirectToChatbotDataSource: vi.fn(),
  })),
}));

vi.mock('@/modules/chatbots/hooks/use-get-current-chatbot-id', () => ({
  useGetCurrentChatbotId: vi.fn(() => ({ chatbotId: 'anyId' })),
}));

vi.mock('@/modules/documents/hooks/use-train-chatbot', () => ({
  useTrainChatbot: vi.fn(() => ({ mutate: vi.fn() })),
}));

describe('approximateTokenUsage', () => {
  it('should return the correct object', () => {
    const result = approximateTokenUsage(100);

    const properties = ['minTokenUsage', 'maxTokenUsage'];

    assertObjectProperties(properties, result);
  });

  it('should return the same amount of characters for minTokenUsage if the amount of characters is less than 1000', () => {
    const result = approximateTokenUsage(100);

    expect(result.minTokenUsage).toBe(100);
  });

  it('should return the correct amount of minTokenUsage if the amount of characters is greater than 1000', () => {
    const result = approximateTokenUsage(1500);

    expect(result.minTokenUsage).toBe(1300);
  });

  it('should return the correct amount of minTokenUsage if the amount of characters is equal 1000', () => {
    const result = approximateTokenUsage(1000);

    expect(result.minTokenUsage).toBe(1000);
  });

  it('should return the correct maxTokenUsage', () => {
    const result = approximateTokenUsage(1000);

    expect(result.maxTokenUsage).toBe(1200);
  });
});

describe('Content', () => {
  const documents = [generateRandomDocument(), generateRandomDocument()];

  const groupedDocuments = [
    { fileName: 'file1', characters: 100 },
    { fileName: 'file2', characters: 200 },
  ];

  const removeDocuments = vi.fn();
  const resetDocuments = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render each file name', () => {
    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    const fileElements = screen.getAllByRole('listitem');

    fileElements.forEach((fileElement, index) => {
      const document = groupedDocuments[index];

      expect(
        within(fileElement).getByText(document.fileName)
      ).toBeInTheDocument();

      expect(
        within(fileElement).getByText(`${document.characters} characters`)
      ).toBeInTheDocument();
    });
  });

  it('should pass the filename of the row to removeDocument when the x button of that row is clicked', async () => {
    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    const fileElements = screen.getAllByRole('listitem');

    fileElements.forEach(async (fileElement, index) => {
      const document = groupedDocuments[index];

      const removeButton = within(fileElement).getByRole('button');

      await userEvent.click(removeButton);

      await waitFor(() => {
        expect(removeDocuments).toHaveBeenCalledWith(document.fileName);
      });
    });
  });

  it('should render the total characters row', () => {
    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    const checkoutRows = screen.getAllByRole('row');
    const totalCharactersRow = checkoutRows[0];

    expect(
      within(totalCharactersRow).getAllByText('Total characters')
    ).toHaveLength(2);

    expect(within(totalCharactersRow).getByText('300')).toBeInTheDocument();
  });

  it('should render the token usage row', () => {
    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    const checkoutRows = screen.getAllByRole('row');
    const tokenUsageRow = checkoutRows[1];

    const expectedTokenUsage = approximateTokenUsage(300);
    const expectedTokenUsageText = `${expectedTokenUsage.minTokenUsage} tokens - ${expectedTokenUsage.maxTokenUsage} tokens`;

    expect(
      within(tokenUsageRow).getAllByText('Approximate token usage')
    ).toHaveLength(2);

    expect(
      within(tokenUsageRow).getByText(expectedTokenUsageText)
    ).toBeInTheDocument();
  });

  it('should render the remaining storage row if remaining_storage_tokens from useStorageTokens is truthy', () => {
    vi.mocked(useStorageTokens).mockReturnValue({
      // @ts-expect-error
      data: { remaining_storage_tokens: 1000 },
    });

    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    const checkoutRows = screen.getAllByRole('row');
    const remainingStorageTokensRow = checkoutRows[2];

    expect(
      within(remainingStorageTokensRow).getAllByText('Storage tokens balance')
    ).toHaveLength(2);

    expect(
      within(remainingStorageTokensRow).getByText('1000')
    ).toBeInTheDocument();
  });

  it('should not render the remaining storage tokens if remaining_storage_tokens from useStorageTokens is falsy', () => {
    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    const checkoutRows = screen.getAllByRole('row');
    const remainingStorageTokensRow = checkoutRows[1];

    expect(
      within(remainingStorageTokensRow).queryAllByText('Storage tokens balance')
    ).toHaveLength(0);
  });

  it('should render the correct new balance when remaining_storage_tokens from useStorageTokens has a valid amount', () => {
    vi.mocked(useStorageTokens).mockReturnValue({
      // @ts-expect-error
      data: { remaining_storage_tokens: 1000 },
    });

    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    const checkoutRows = screen.getAllByRole('row');
    const newBalanceRow = checkoutRows[checkoutRows.length - 1];

    expect(within(newBalanceRow).getAllByText('New balance')).toHaveLength(2);

    // storageTokens - totalCharacters
    expect(within(newBalanceRow).getByText('700')).toBeInTheDocument();
  });

  it('should render the insufficient storage tokens message when remaining_storage_tokens from useStorageTokens is insufficient', () => {
    vi.mocked(useStorageTokens).mockReturnValue({
      // @ts-expect-error
      data: { remaining_storage_tokens: 100 },
    });

    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    const insufficientBalanceMessage = screen.getAllByText(
      'Insuficient storage tokens'
    );

    expect(insufficientBalanceMessage).toHaveLength(2);
  });

  it('should not render the insufficient storage tokens message when remaining_storage_tokens from useStorageTokens is sufficient', () => {
    vi.mocked(useStorageTokens).mockReturnValue({
      // @ts-expect-error
      data: { remaining_storage_tokens: 1000 },
    });

    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    const insufficientBalanceMessage = screen.queryAllByText(
      'Insuficient storage tokens'
    );

    expect(insufficientBalanceMessage).toHaveLength(0);
  });

  it('should render the train button', () => {
    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    assertButtonIsInTheDocument('Train chatbot');
  });

  it('should render the cancel button', () => {
    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    assertButtonIsInTheDocument('Cancel');
  });

  it('should call resetDocuments when the cancel button is clicked', async () => {
    render(
      <Content
        documents={documents}
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        resetDocuments={resetDocuments}
      />
    );

    await assertFunctionIsCalledOnButtonClick('Cancel', resetDocuments);
  });
});
