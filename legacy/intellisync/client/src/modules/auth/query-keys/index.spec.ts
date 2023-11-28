import { describe, expect, it } from 'vitest';

import { usersQueryKeys } from '.';

describe('usersQueryKeys', () => {
  it('should return the base key', () => {
    const baseKey = usersQueryKeys.base;
    expect(baseKey).toEqual(['user']);
  });

  it('should return the single user key', () => {
    const queryKey = usersQueryKeys.user();
    expect(queryKey).toEqual(['user']);
  });
});
