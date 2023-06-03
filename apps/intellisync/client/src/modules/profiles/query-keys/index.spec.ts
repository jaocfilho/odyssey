import { describe, expect, it } from 'vitest';

import { profilesQueryKeys } from '.';

describe('profilesQueryKeys', () => {
  it('should return the base key', () => {
    const baseKey = profilesQueryKeys.base;
    expect(baseKey).toEqual(['profiles']);
  });

  it('should return the all profiles key', () => {
    const queryKey = profilesQueryKeys.all();
    expect(queryKey).toEqual(['profiles']);
  });

  it('should return the single profile key', () => {
    const queryKey = profilesQueryKeys.profile('any');
    expect(queryKey).toEqual(['profiles', 'any']);
  });
});
