import { describe, it, vi } from 'vitest';

import { getCommit, GetCommitResponse, handleResponse } from '.';
import { getRepositoriesEndpoints } from '../../../../lib';

describe('getCommit', () => {
  vi.mock('../../../../lib', () => ({
    getRepositoriesEndpoints: vi.fn(),
  }));

  it('should request to the correct endpoint', async () => {
    const getCommitMock = vi.fn();
    vi.mocked(getRepositoriesEndpoints).mockReturnValue({
      getCommit: getCommitMock,
    });

    await getCommit({ owner: 'any', ref: 'any', repo: 'any' });
    expect(getCommitMock).toHaveBeenCalled();
  });
});

describe('handleResponse', () => {
  it('should return null if response is !== 200', () => {
    const response = { status: 100 };
    const commit = handleResponse(response as GetCommitResponse);
    expect(commit).toBeNull();
  });
});
