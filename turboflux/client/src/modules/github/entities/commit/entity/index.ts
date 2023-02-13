import { z } from 'zod';

import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';

import { getRepositoriesEndpoints } from '../../../../../lib';

const repositories = getRepositoriesEndpoints();
export type CommitResponseData = GetResponseDataTypeFromEndpointMethod<
  typeof repositories.getCommit
>;

const authorSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  date: z.string().datetime(),
});

const commiterSchema = authorSchema;

export const commitSchema = z.object({
  sha: z.string(),
  commit: z.object({
    author: authorSchema,
    message: z.string(),
    committer: commiterSchema,
    url: z.string().url(),
  }),
});

export type CommitInput = z.input<typeof commitSchema>;
export type Commit = z.output<typeof commitSchema>;
export type Commits = Commit[];
