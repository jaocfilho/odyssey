import { Repos } from '../../types';

import {
  listCommitsUseCase,
  ListCommitsUseCaseParams,
  GetCommitUseCaseParams,
  getCommitUseCase,
} from '../../use-cases';

export class Repositories {
  constructor(private repos: Repos) {}

  async listCommits({ owner, repo }: ListCommitsUseCaseParams) {
    return await listCommitsUseCase({ owner, repo }, this.repos);
  }

  async getCommit({ owner, repo, ref }: GetCommitUseCaseParams) {
    return await getCommitUseCase({ owner, repo, ref }, this.repos);
  }
}
