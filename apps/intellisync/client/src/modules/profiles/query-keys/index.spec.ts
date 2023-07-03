import { describe, expect, it } from 'vitest';

import { profilesQueryKeys } from '.';

describe('profilesQueryKeys', () => {
  it('should return the base key', () => {
    const baseKey = profilesQueryKeys.base;
    expect(baseKey).toEqual(['profile']);
  });

  it('should return the single profile key', () => {
    const queryKey = profilesQueryKeys.profile();
    expect(queryKey).toEqual(['profile']);
  });
});
