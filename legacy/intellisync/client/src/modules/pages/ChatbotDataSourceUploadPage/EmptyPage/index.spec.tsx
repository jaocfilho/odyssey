import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { FileUploadButton } from '@/modules/documents/components/FileUploadButton';
import { EmptyPage } from '.';

vi.mock('@/modules/documents/components/FileUploadButton', () => ({
  FileUploadButton: vi.fn(),
}));

describe('EmptyPage', () => {
  const onUpload = vi.fn();
  const chatbotId = 'chatbotId';

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render without crashing', () => {
    render(<EmptyPage chatbotId={chatbotId} onUpload={onUpload} />);

    const element = screen.getByText('No files uploaded');

    expect(element).toBeInTheDocument();
  });

  it('should pass chatbotId and onUpload to FileUploadButton', () => {
    render(<EmptyPage chatbotId={chatbotId} onUpload={onUpload} />);

    expect(FileUploadButton).toHaveBeenCalledWith({ chatbotId, onUpload }, {});
  });

  it('should pass chatbotId to FileUploadButton', () => {
    render(<EmptyPage chatbotId={chatbotId} onUpload={onUpload} />);

    expect(FileUploadButton).toHaveBeenCalledWith(
      expect.objectContaining({ chatbotId }),
      {}
    );
  });

  it('should pass onUpload to FileUploadButton', () => {
    render(<EmptyPage chatbotId={chatbotId} onUpload={onUpload} />);

    expect(FileUploadButton).toHaveBeenCalledWith(
      expect.objectContaining({ onUpload }),
      {}
    );
  });

  it('should render a cancel link', () => {
    render(<EmptyPage chatbotId={chatbotId} onUpload={onUpload} />);

    const cancelButton = screen.getByRole('link', { name: 'Cancel' });

    expect(cancelButton).toBeInTheDocument();
  });
});
