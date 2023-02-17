import { Octokit } from 'octokit';

import { Repositories } from '../Repositories';

export class GithubProvider {
  private _repositories: Repositories;

  constructor(octokit: Octokit) {
    const repositories = new Repositories(octokit.rest.repos);

    this._repositories = repositories;
  }

  get repositories() {
    return this._repositories;
  }
}
