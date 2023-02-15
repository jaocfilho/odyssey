import { describe, expect, it, vi } from 'vitest';

import { createCommitService } from '../../../entities';
import { ListCommitsResponseData } from '../types';
import { parseData } from '.';

describe('parseData', () => {
  vi.mock('../../../entities', () => ({
    createCommitService: vi.fn(),
  }));

  it('should call createCommitService for each object in data', () => {
    const data = [...new Array(5)] as ListCommitsResponseData;
    parseData(data);

    expect(createCommitService).toHaveBeenCalledTimes(data.length);
  });
});
