import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { NewDocumentsList } from '@/modules/documents/components/NewDocumentsList';
import { NonEmptyPage } from '.';
import { clickButton } from '@odyssey/tests';

vi.mock('@/modules/documents/components/NewDocumentsList', () => ({
  NewDocumentsList: vi.fn(),
}));

describe('NonEmptyPage', () => {
  const chatbotId = 'chatbotId';
  const resetDocuments = vi.fn();
  const items = [
    { characters: 1, fileName: 'file1' },
    { characters: 2, fileName: 'file2' },
  ];

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render without crashing', () => {
    render(
      <NonEmptyPage
        documents={[]}
        chatbotId={chatbotId}
        items={items}
        resetDocuments={resetDocuments}
      />
    );

    expect(true).toBe(true);
  });

  it('should render two buttons', () => {
    render(
      <NonEmptyPage
        documents={[]}
        chatbotId={chatbotId}
        items={items}
        resetDocuments={resetDocuments}
      />
    );

    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('should call resetDocuments when cancel button is clicked', async () => {
    render(
      <NonEmptyPage
        documents={[]}
        chatbotId={chatbotId}
        items={items}
        resetDocuments={resetDocuments}
      />
    );

    await clickButton('Cancel');

    expect(resetDocuments).toHaveBeenCalled();
  });
});
