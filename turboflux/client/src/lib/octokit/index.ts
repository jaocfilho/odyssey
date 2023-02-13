import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN,
});

export const getRepositoriesEndpoints = () => {
  return octokit.rest.repos;
};
