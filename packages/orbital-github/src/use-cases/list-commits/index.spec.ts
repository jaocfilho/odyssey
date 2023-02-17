import { beforeAll, describe, expect, it, vi } from 'vitest';

import { handleResponse } from './handleResponse';
import { listCommitsUseCase } from '.';

describe('listCommitsUseCase', () => {
  vi.mock('./handleResponse', () => ({
    handleResponse: vi.fn(),
  }));

  const listCommits = vi.fn();
  const repositories = { listCommits };

  beforeAll(async () => {
    // @ts-expect-error
    await listCommitsUseCase({ owner: 'any', repo: 'any' }, repositories);
  });

  it('should request to the correct endpoint', () => {
    expect(listCommits).toHaveBeenCalled();
  });

  it('should call handleResponse', () => {
    expect(handleResponse).toHaveBeenCalled();
  });
});
