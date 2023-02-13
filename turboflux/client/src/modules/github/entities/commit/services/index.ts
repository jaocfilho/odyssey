import { commitSchema, Commit, CommitInput } from '../entity';

export const createCommitService = (data: CommitInput): Commit => {
  return commitSchema.parse(data);
};
