import { GetResponseTypeFromEndpointMethod } from '@octokit/types';

import { getRepositoriesEndpoints } from '../../../../lib/octokit';
import { CommitInput, Commit, createCommitService } from '../../entities';

const repositories = getRepositoriesEndpoints();

export type OcktokitGetCommitFn = typeof repositories.getCommit;
export type GetCommitResponse =
  GetResponseTypeFromEndpointMethod<OcktokitGetCommitFn>;

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

export const handleResponse = (response: GetCommitResponse): Commit | null => {
  if (response.status === 200) {
    const commit = createCommitService(response.data as CommitInput);
    return commit;
  }

  return null;
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

  return handleResponse(response);
};
