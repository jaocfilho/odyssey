import { getRepositoriesEndpoints } from '../../../../lib/octokit';

export const listCommitsService = async () => {
  const repositories = getRepositoriesEndpoints();
  const response = await repositories.listCommits({
    owner: 'jaocfilho',
    repo: 'odyssey',
  });

  return response;
};
