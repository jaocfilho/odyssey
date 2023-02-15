import { describe, it, vi } from 'vitest';
import { listCommitsService } from '.';

import { getRepositoriesEndpoints } from '../../../../lib/octokit';

describe('listCommitsService', () => {
  vi.mock('../../../../lib/octokit', () => ({
    getRepositoriesEndpoints: vi.fn(),
  }));

  it('should request to the correct endpoint', async () => {
    const listCommitsMock = vi.fn();
    vi.mocked(getRepositoriesEndpoints).mockReturnValue({
      // @ts-expect-error
      listCommits: listCommitsMock,
    });

    await listCommitsService({ owner: 'any', repo: 'any' });
    expect(listCommitsMock).toHaveBeenCalled();
  });
});
