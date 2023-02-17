import { describe, it, vi, expect } from 'vitest';

import { ListCommitsResponse } from '../types';
import { parseData } from '../parseData';
import { handleResponse } from '.';

describe('handleResponse', () => {
  vi.mock('../parseData', () => ({
    parseData: vi.fn(),
  }));

  it('should return null if response is !== 200', () => {
    const response = { status: 100 };
    const commit = handleResponse(response as ListCommitsResponse);
    expect(commit).toBeNull();
  });

  it('should call `parseData` if status is 200', () => {
    const response = { status: 200, data: [{}] };
    handleResponse(response as ListCommitsResponse);
    expect(parseData).toHaveBeenCalled();
  });
});
