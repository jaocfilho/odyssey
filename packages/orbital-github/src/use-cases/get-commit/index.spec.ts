import { describe, it, vi, expect, beforeAll } from 'vitest';

import { handleResponse } from './handleResponse';
import { getCommitUseCase } from '.';

describe('getCommitUseCase', () => {
  vi.mock('./handleResponse', () => ({
    handleResponse: vi.fn(),
  }));

  const getCommit = vi.fn();
  const repositories = { getCommit };

  beforeAll(async () => {
    await getCommitUseCase(
      { owner: 'any', ref: 'any', repo: 'any' },
      // @ts-expect-error
      repositories
    );
  });

  it('should request to the correct endpoint', async () => {
    expect(getCommit).toHaveBeenCalled();
  });

  it('should call handleResponse', () => {
    expect(handleResponse).toHaveBeenCalled();
  });
});
