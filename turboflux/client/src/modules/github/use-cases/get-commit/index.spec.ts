import { describe, it, vi } from 'vitest';

import { handleResponse } from './handleResponse';
import { getRepositoriesEndpoints } from '../../../../lib/octokit';
import { getCommitUseCase } from '.';

describe('getCommitUseCase', () => {
  vi.mock('../../../../lib/octokit', () => ({
    getRepositoriesEndpoints: vi.fn(),
  }));

  vi.mock('./handleResponse', () => ({
    handleResponse: vi.fn(),
  }));

  const getCommitMock = vi.fn();
  vi.mocked(getRepositoriesEndpoints).mockReturnValue({
    // @ts-expect-error
    getCommit: getCommitMock,
  });

  it('should request to the correct endpoint', async () => {
    await getCommitUseCase({ owner: 'any', ref: 'any', repo: 'any' });
    expect(getCommitMock).toHaveBeenCalled();
  });

  it('should call handleResponse', () => {
    getCommitUseCase({ owner: 'any', ref: 'any', repo: 'any' });
    expect(handleResponse).toHaveBeenCalled();
  });
});
