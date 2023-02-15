import {
  GetResponseTypeFromEndpointMethod,
  GetResponseDataTypeFromEndpointMethod,
} from '@octokit/types';

import { getRepositoriesEndpoints } from '../../../../lib/octokit';

const repositories = getRepositoriesEndpoints();

export type OcktokitListCommitsFn = typeof repositories.listCommits;
export type ListCommitsResponse =
  GetResponseTypeFromEndpointMethod<OcktokitListCommitsFn>;
export type ListCommitsResponseData =
  GetResponseDataTypeFromEndpointMethod<OcktokitListCommitsFn>;
