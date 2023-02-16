import { getRepositoriesEndpoints } from '../../../../lib/octokit';
import { Commit } from '../../entities';
import { handleResponse } from './handleResponse';

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

type GetCommitUseCaseParams = GetCommitParams;

export const getCommitUseCase = async ({
  owner,
  repo,
  ref,
}: GetCommitUseCaseParams): Promise<Commit | null> => {
  const response = await getCommit({
    owner,
    repo,
    ref,
  });

  return handleResponse(response);
};
