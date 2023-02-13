import { z } from 'zod';

const authorSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  date: z.string().datetime(),
});

export type AuthorInput = z.input<typeof authorSchema>;
export type Author = z.output<typeof authorSchema>;

const commiterSchema = authorSchema;

export type CommiterInput = z.input<typeof commiterSchema>;
export type Commiter = z.output<typeof commiterSchema>;

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
