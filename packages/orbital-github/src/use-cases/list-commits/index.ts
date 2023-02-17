import { Repos } from '../../types';
import { handleResponse } from './handleResponse';

export type ListCommitsUseCaseParams = {
  owner: string;
  repo: string;
};

export const listCommitsUseCase = async (
  { owner, repo }: ListCommitsUseCaseParams,
  repositories: Repos
) => {
  const response = await repositories.listCommits({
    owner,
    repo,
  });

  return handleResponse(response);
};
