import {
  GetResponseTypeFromEndpointMethod,
  GetResponseDataTypeFromEndpointMethod,
} from '@octokit/types';

import { getRepositoriesEndpoints } from '../../../../lib/octokit';

const repositories = getRepositoriesEndpoints();

export type OcktokitGetCommitFn = typeof repositories.getCommit;
export type GetCommitResponse =
  GetResponseTypeFromEndpointMethod<OcktokitGetCommitFn>;
export type GetCommitResponseData =
  GetResponseDataTypeFromEndpointMethod<OcktokitGetCommitFn>;
