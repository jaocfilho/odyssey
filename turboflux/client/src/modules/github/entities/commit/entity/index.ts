import { z } from 'zod';

import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';

import { octokit } from '../../../../../lib';

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
    committer: commiterSchema,
    url: z.string().url(),
  }),
});

export type CommitInput = z.input<typeof commitSchema>;
export type CommitOutput = z.output<typeof commitSchema>;

export type Commit = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.getCommit
>;
export type Commits = Commit[];
