import { CommitInput, Commits, createCommitService } from '../../../entities';
import { ListCommitsResponseData } from '../types';

export const parseData = (data: ListCommitsResponseData): Commits => {
  // TODO check types
  return data.map((commit) => createCommitService(commit as CommitInput));
};
