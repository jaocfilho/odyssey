import { Octokit } from 'octokit';

import { GithubProvider } from '../GithubProvider';

type GithubConstructorParams = {
  auth?: any;
};

export class Github {
  private _githubProvider: GithubProvider;

  constructor(params?: GithubConstructorParams) {
    const octokit = new Octokit({ auth: params?.auth });

    this._githubProvider = new GithubProvider(octokit);
  }

  get repositories() {
    return this._githubProvider.repositories;
  }
}
