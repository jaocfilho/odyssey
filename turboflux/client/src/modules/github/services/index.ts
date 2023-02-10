import { octokit } from '../../../lib';

export const listCommitsService = async () => {
  const response = await octokit.rest.repos.listCommits({
    owner: 'jaocfilho',
    repo: 'odyssey',
  });

  return response;
};

export const getCommitService = async () => {
  const response = await octokit.rest.repos.getCommit({
    owner: 'jaocfilho',
    repo: 'odyssey',
    ref: '72826d8b808637814be64cf8ba23f012bea293b7',
  });

  return response;
};
