import { describe, it, vi } from 'vitest';

import { parseData } from '../parseData';
import { handleResponse } from '.';
import { GetCommitResponse } from '../types';

describe('handleResponse', () => {
  vi.mock('../parseData', () => ({
    parseData: vi.fn(),
  }));

  it('should return null if response is !== 200', () => {
    const response = { status: 100 };
    const commit = handleResponse(response as GetCommitResponse);
    expect(commit).toBeNull();
  });

  it('should call `parseData` if status is 200', () => {
    const response = { status: 200, data: {} };
    handleResponse(response as GetCommitResponse);
    expect(parseData).toHaveBeenCalled();
  });
});
