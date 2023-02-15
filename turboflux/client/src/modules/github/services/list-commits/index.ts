import { getRepositoriesEndpoints } from '../../../../lib/octokit';

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

  return response;
};
