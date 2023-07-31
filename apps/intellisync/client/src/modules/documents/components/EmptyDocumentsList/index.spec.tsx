import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { FileUploadButton } from '../FileUploadButton';
import { EmptyDocumentsList } from '.';

vi.mock('../FileUploadButton', () => ({
  FileUploadButton: vi.fn(),
}));

describe('EmptyDocumentsList', () => {
  const onUpload = vi.fn();
  const chatbotId = 'chatbotId';

  afterEach(() => {
    cleanup();
  });

  it('should render without crashing', () => {
    render(<EmptyDocumentsList chatbotId={chatbotId} onUpload={onUpload} />);

    const element = screen.getByText('No files uploaded');

    expect(element).toBeInTheDocument();
  });

  it('should pass chatbotId and onUpload to FileUploadButton', () => {
    render(<EmptyDocumentsList chatbotId={chatbotId} onUpload={onUpload} />);

    expect(FileUploadButton).toHaveBeenCalledWith({ chatbotId, onUpload }, {});
  });
});
