import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useUploadFiles } from '.';
import { assertObjectProperties } from '@odyssey/tests';
import { baseUploadFiles } from '../../api/base';
import { invalidateChatbotFileSourceQuery } from '@/modules/chatbots/query-keys';

vi.mock('../../api/base', () => ({
  baseUploadFiles: vi.fn(),
}));

vi.mock('@/modules/chatbots/query-keys', () => ({
  invalidateChatbotFileSourceQuery: vi.fn(),
}));

describe('useUploadFiles', () => {
  const onUpload = vi.fn();

  const { result, rerender, unmount } = renderHook(() =>
    useUploadFiles({ onUpload })
  );

  beforeEach(() => {
    vi.restoreAllMocks();
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['uploadFiles'];
    assertObjectProperties(properties, result.current);
  });

  it('should call baseUploadFiles with the correct params', async () => {
    vi.mocked(baseUploadFiles).mockResolvedValue({
      status: 200,
      // @ts-expect-error
      json: vi.fn(() => ({ documents: [] })),
    });

    const files: any = [];
    const chatbotId = 'chatbotId';

    await result.current.uploadFiles({ files, chatbotId });

    expect(baseUploadFiles).toHaveBeenCalledWith({ files, chatbotId });
  });

  it('should call onUpload with the correct params if status is 200', async () => {
    vi.mocked(baseUploadFiles).mockResolvedValue({
      status: 200,
      // @ts-expect-error
      json: vi.fn(() => ({ documents: [] })),
    });

    const files: any = [];
    const chatbotId = 'chatbotId';

    await result.current.uploadFiles({ files, chatbotId });

    expect(onUpload).toHaveBeenCalledWith([]);
  });

  it('should not call onUpload if status is not 200', async () => {
    vi.mocked(baseUploadFiles).mockResolvedValue({
      status: 400,
      // @ts-expect-error
      json: vi.fn(() => ({ documents: [] })),
    });

    const files: any = [];
    const chatbotId = 'chatbotId';

    await result.current.uploadFiles({ files, chatbotId });

    expect(onUpload).not.toHaveBeenCalled();
  });

  it('should not call invalidateChatbotFileSourceQuery if status is not 200', async () => {
    vi.mocked(baseUploadFiles).mockResolvedValue({
      status: 400,
      // @ts-expect-error
      json: vi.fn(() => ({ documents: [] })),
    });

    const files: any = [];
    const chatbotId = 'chatbotId';

    await result.current.uploadFiles({ files, chatbotId });

    expect(invalidateChatbotFileSourceQuery).not.toHaveBeenCalled();
  });
});
