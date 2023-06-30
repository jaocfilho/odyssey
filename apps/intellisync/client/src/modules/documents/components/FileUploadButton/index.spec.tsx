import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { FileUploadButton } from '.';
import { assertButtonIsInTheDocument, clickButton } from '@odyssey/tests';
import { useUploadFiles } from '../../hooks/use-upload-files';

vi.mock('../../hooks/use-upload-files', () => ({
  useUploadFiles: vi.fn(() => ({
    uploadFiles: vi.fn(),
  })),
}));

describe('FileUploadButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    render(<FileUploadButton chatbotId="any" />);

    assertButtonIsInTheDocument('Upload file');
  });

  it('should trigger the input click on button click', async () => {
    const onClickSpy = vi.spyOn(HTMLInputElement.prototype, 'click');

    render(<FileUploadButton chatbotId="any" />);

    await clickButton('Upload file');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should call uploadFiles on input change', async () => {
    const uploadFiles = vi.fn();
    vi.mocked(useUploadFiles).mockReturnValue({
      uploadFiles,
    });

    render(<FileUploadButton chatbotId="any" />);

    const file = new File(['any'], 'anyFile.pdf', { type: 'application/pdf' });

    const input = screen.getByLabelText('file input');
    await userEvent.upload(input, file);

    expect(uploadFiles).toHaveBeenCalled();
  });
});
