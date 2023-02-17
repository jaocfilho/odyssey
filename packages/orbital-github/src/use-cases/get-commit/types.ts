import { Octokit } from 'octokit';
import {
  GetResponseTypeFromEndpointMethod,
  GetResponseDataTypeFromEndpointMethod,
} from '@octokit/types';

const octokit = new Octokit();
const repositories = octokit.rest.repos;

export type OcktokitGetCommitFn = typeof repositories.getCommit;
export type GetCommitResponse =
  GetResponseTypeFromEndpointMethod<OcktokitGetCommitFn>;
export type GetCommitResponseData =
  GetResponseDataTypeFromEndpointMethod<OcktokitGetCommitFn>;
