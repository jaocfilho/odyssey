import { octokit } from '../../../../../lib';
import { commitSchema, Commit } from '../entity';

const createCommitService = (data: Commit) => {
  return commitSchema.parse(data);
};

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

  if (response.status === 200) {
    const commit = createCommitService(response.data);
    console.log(commit);
  }

  return response;
};
