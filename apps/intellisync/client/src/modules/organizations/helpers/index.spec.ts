import { describe, it, expect, vi, beforeEach } from 'vitest';

import { queryClient } from '@/lib/react-query/client';
import { getCurrentOrganization, setCurrentOrganization } from '.';

vi.mock('@/lib/react-query/client', () => ({
  queryClient: {
    setQueryData: vi.fn(),
    getQueryData: vi.fn(),
  },
}));

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('setCurrentOrganization', () => {
  it('should pass the correct params to setQueryData', () => {
    const initialData = {};
    // @ts-ignore
    setCurrentOrganization(initialData);

    expect(queryClient.setQueryData).toHaveBeenCalledWith(
      ['organizations', 'current'],
      initialData
    );
  });
});

describe('getCurrentOrganization', () => {
  it('should pass the correct params to getQueryData', () => {
    getCurrentOrganization();

    expect(queryClient.getQueryData).toHaveBeenCalledWith([
      'organizations',
      'current',
    ]);
  });
});
