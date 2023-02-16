import { describe, it, vi } from 'vitest';

import { createCommitService } from '../../../entities';
import { GetCommitResponseData } from '../types';
import { parseData } from '.';

describe('parseData', () => {
  vi.mock('../../../entities', () => ({
    createCommitService: vi.fn(),
  }));

  it('should call createCommitService', () => {
    parseData({} as GetCommitResponseData);
    expect(createCommitService).toHaveBeenCalled();
  });
});
