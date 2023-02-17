import { Repos } from '../../types';
import { Commit } from '../../entities';
import { handleResponse } from './handleResponse';

export type GetCommitUseCaseParams = {
  owner: string;
  repo: string;
  ref: string;
};

export const getCommitUseCase = async (
  { owner, repo, ref }: GetCommitUseCaseParams,
  repositories: Repos
): Promise<Commit | null> => {
  const response = await repositories.getCommit({
    owner,
    repo,
    ref,
  });

  return handleResponse(response);
};
