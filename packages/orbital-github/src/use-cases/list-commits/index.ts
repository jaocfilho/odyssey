import { Repos } from '../../types';
import { handleResponse } from './handleResponse';
import { ListCommitsRequestParams } from './types';

export type ListCommitsUseCaseParams = ListCommitsRequestParams;

export const listCommitsUseCase = async (
  params: ListCommitsUseCaseParams,
  repositories: Repos
) => {
  const response = await repositories.listCommits(params);

  return handleResponse(response);
};
