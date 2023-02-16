import { describe, it, vi } from 'vitest';

import { getRepositoriesEndpoints } from '../../../../lib/octokit';
import { handleResponse } from './handleResponse';
import { listCommitsUseCase } from '.';

describe('listCommitsUseCase', () => {
  vi.mock('../../../../lib/octokit', () => ({
    getRepositoriesEndpoints: vi.fn(),
  }));

  vi.mock('./handleResponse', () => ({
    handleResponse: vi.fn(),
  }));

  const listCommitsMock = vi.fn();
  vi.mocked(getRepositoriesEndpoints).mockReturnValue({
    // @ts-expect-error
    listCommits: listCommitsMock,
  });

  it('should request to the correct endpoint', () => {
    listCommitsUseCase({ owner: 'any', repo: 'any' });
    expect(listCommitsMock).toHaveBeenCalled();
  });

  it('should call handleResponse', () => {
    listCommitsUseCase({ owner: 'any', repo: 'any' });
    expect(handleResponse).toHaveBeenCalled();
  });
});
