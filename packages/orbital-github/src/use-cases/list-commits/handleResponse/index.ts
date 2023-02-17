import { Commits } from '../../../entities';
import { parseData } from '../parseData';
import { ListCommitsResponse } from '../types';

export const handleResponse = (
  response: ListCommitsResponse
): Commits | null => {
  if (response.status === 200) {
    return parseData(response.data);
  }

  return null;
};
