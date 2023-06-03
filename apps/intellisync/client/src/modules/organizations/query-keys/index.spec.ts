import { describe, expect, it } from 'vitest';

import { organizationsQueryKeys } from '.';

describe('organizationsQueryKeys', () => {
  it('should return the base key', () => {
    const baseKey = organizationsQueryKeys.base;
    expect(baseKey).toEqual(['organizations']);
  });

  it('should return the all organizations key', () => {
    const queryKey = organizationsQueryKeys.all();
    expect(queryKey).toEqual(['organizations']);
  });

  it('should return the single organization key', () => {
    const queryKey = organizationsQueryKeys.organization('any');
    expect(queryKey).toEqual(['organizations', 'any']);
  });
});
