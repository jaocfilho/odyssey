import { Commit } from '../../../entities';
import { parseData } from '../parseData';
import { GetCommitResponse } from '../types';

export const handleResponse = (response: GetCommitResponse): Commit | null => {
  if (response.status === 200) {
    return parseData(response.data);
  }

  return null;
};
