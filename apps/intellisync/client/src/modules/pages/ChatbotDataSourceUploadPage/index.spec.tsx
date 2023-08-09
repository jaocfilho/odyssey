import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useGroupedDocuments } from '@/modules/documents/hooks/use-grouped-documents';
import { ChatbotDataSourceUploadPage } from '.';

vi.mock('@/modules/documents/hooks/use-grouped-documents', () => ({
  useGroupedDocuments: vi.fn(() => ({
    documents: [],
    groupedDocuments: [],
    removeDocuments: vi.fn(),
    resetDocuments: vi.fn(),
    setDocuments: vi.fn(),
  })),
}));

vi.mock('./EmptyPage', () => ({
  EmptyPage: vi.fn(() => <div>EmptyPage</div>),
}));

vi.mock('./Content', () => ({
  Content: vi.fn(() => <div>Content</div>),
}));

describe('ChatbotDataSourceUploadPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render an empty page when groupedDocuments is empty', () => {
    render(<ChatbotDataSourceUploadPage chatbotId="anyId" />);

    const element = screen.getByText('EmptyPage');

    expect(element).toBeInTheDocument();
  });

  it('should render the content when groupedDocuments is not empty', () => {
    vi.mocked(useGroupedDocuments).mockReturnValue({
      documents: [],
      groupedDocuments: [{ characters: 0, fileName: 'anyFileName' }],
      removeDocuments: vi.fn(),
      resetDocuments: vi.fn(),
      setDocuments: vi.fn(),
    });

    render(<ChatbotDataSourceUploadPage chatbotId="anyId" />);

    const element = screen.getByText('Content');

    expect(element).toBeInTheDocument();
  });
});
