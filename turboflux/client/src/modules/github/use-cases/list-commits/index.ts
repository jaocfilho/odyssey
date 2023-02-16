import { getRepositoriesEndpoints } from '../../../../lib/octokit';
import { handleResponse } from './handleResponse';

type ListCommitsUseCaseParams = {
  owner: string;
  repo: string;
};

export const listCommitsUseCase = async ({
  owner,
  repo,
}: ListCommitsUseCaseParams) => {
  const repositories = getRepositoriesEndpoints();
  const response = await repositories.listCommits({
    owner,
    repo,
  });

  return handleResponse(response);
};
