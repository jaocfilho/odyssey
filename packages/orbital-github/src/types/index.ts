import { Octokit } from 'octokit';

const octokit = new Octokit();

export type Repos = typeof octokit.rest.repos;
