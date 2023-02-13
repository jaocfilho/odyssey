import { getRepositoriesEndpoints } from '../../../../lib';
import { CommitInput, Commit, createCommitService } from '../../entities';

type GetCommitParams = {
  owner: string;
  repo: string;
  ref: string;
};

export const getCommit = async ({ owner, repo, ref }: GetCommitParams) => {
  const repositories = getRepositoriesEndpoints();
  const response = await repositories.getCommit({
    owner,
    repo,
    ref,
  });

  return response;
};

type GetCommitServiceParams = GetCommitParams;

export const getCommitService = async ({
  owner,
  repo,
  ref,
}: GetCommitServiceParams): Promise<Commit | null> => {
  const response = await getCommit({
    owner,
    repo,
    ref,
  });

  if (response.status === 200) {
    const commit = createCommitService(response.data as CommitInput);
    return commit;
  }

  return null;
};
