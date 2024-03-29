import { Octokit } from 'octokit';
import {
  GetResponseTypeFromEndpointMethod,
  GetResponseDataTypeFromEndpointMethod,
  Endpoints,
} from '@octokit/types';

const octokit = new Octokit();
const repositories = octokit.rest.repos;

export type OcktokitListCommitsFn = typeof repositories.listCommits;

export type ListCommitsResponse =
  GetResponseTypeFromEndpointMethod<OcktokitListCommitsFn>;

export type ListCommitsResponseData =
  GetResponseDataTypeFromEndpointMethod<OcktokitListCommitsFn>;

export type ListCommitsRequestParams =
  Endpoints['GET /repos/{owner}/{repo}/commits']['parameters'];
