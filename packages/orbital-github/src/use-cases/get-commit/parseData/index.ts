import { CommitInput, createCommitService } from '../../../entities';
import { GetCommitResponseData } from '../types';

export const parseData = (data: GetCommitResponseData) => {
  const commit = createCommitService(data as CommitInput);
  return commit;
};
