import { getRepositoriesEndpoints } from '../../../../lib';

export const listCommitsService = async () => {
  const repositories = getRepositoriesEndpoints();
  const response = await repositories.listCommits({
    owner: 'jaocfilho',
    repo: 'odyssey',
  });

  return response;
};
