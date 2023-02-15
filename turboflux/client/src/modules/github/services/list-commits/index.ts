import { getRepositoriesEndpoints } from '../../../../lib/octokit';
import { handleResponse } from './handleResponse';

type ListCommitsServiceParams = {
  owner: string;
  repo: string;
};

export const listCommitsService = async ({
  owner,
  repo,
}: ListCommitsServiceParams) => {
  const repositories = getRepositoriesEndpoints();
  const response = await repositories.listCommits({
    owner,
    repo,
  });

  return handleResponse(response);
};
