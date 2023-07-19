import { describe, expect, it } from 'vitest';

import { organizationsQueryKeys, organizationQueryKey } from '.';

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

  it('should return the current organization key', () => {
    const queryKey = organizationsQueryKeys.current();
    expect(queryKey).toEqual(['organizations', 'current']);
  });

  it('should return the message credits key', () => {
    const queryKey = organizationsQueryKeys.messageCredits('any');
    expect(queryKey).toEqual(['organizations', 'any', 'message-credits']);
  });
});

describe('organizationQueryKey', () => {
  it('should return the single organization key', () => {
    const queryKey = organizationQueryKey('any');
    expect(queryKey).toEqual(['organizations', 'any']);
  });
});
