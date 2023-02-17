import { Repos } from '../../types';

import {
  listCommitsUseCase,
  ListCommitsUseCaseParams,
  GetCommitUseCaseParams,
  getCommitUseCase,
} from '../../use-cases';

export class Repositories {
  constructor(private repos: Repos) {}

  async listCommits(params: ListCommitsUseCaseParams) {
    return await listCommitsUseCase(params, this.repos);
  }

  async getCommit({ owner, repo, ref }: GetCommitUseCaseParams) {
    return await getCommitUseCase({ owner, repo, ref }, this.repos);
  }
}
