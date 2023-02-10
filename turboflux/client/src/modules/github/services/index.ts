import { octokit } from '../../../lib';

export const listCommitsService = async () => {
  const response = await octokit.rest.repos.listCommits({
    owner: 'jaocfilho',
    repo: 'odyssey',
  });

  console.log(response);
};
