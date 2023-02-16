import { describe, it, vi } from 'vitest';

import { getCommit, GetCommitResponse, handleResponse } from '.';
import { getRepositoriesEndpoints } from '../../../../lib/octokit';
import { createCommitService } from '../../entities';

describe('getCommit', () => {
  vi.mock('../../../../lib/octokit', () => ({
    getRepositoriesEndpoints: vi.fn(),
  }));

  it('should request to the correct endpoint', async () => {
    const getCommitMock = vi.fn();
    vi.mocked(getRepositoriesEndpoints).mockReturnValue({
      // @ts-expect-error
      getCommit: getCommitMock,
    });

    await getCommit({ owner: 'any', ref: 'any', repo: 'any' });
    expect(getCommitMock).toHaveBeenCalled();
  });
});

describe('handleResponse', () => {
  vi.mock('../../entities', () => ({
    createCommitService: vi.fn(),
  }));

  it('should return null if response is !== 200', () => {
    const response = { status: 100 };
    const commit = handleResponse(response as GetCommitResponse);
    expect(commit).toBeNull();
  });

  it('should call `createCommitService` if status is 200', () => {
    const response = { status: 200, data: {} };
    handleResponse(response as GetCommitResponse);
    expect(createCommitService).toHaveBeenCalled();
  });
});
