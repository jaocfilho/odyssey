import { describe, expect, it } from 'vitest';

import { appsQueryKeys } from '.';

describe('appsQueryKeys', () => {
  it('should return the base key', () => {
    const baseKey = appsQueryKeys.base;
    expect(baseKey).toEqual(['apps']);
  });

  it('should return the all key', () => {
    const allKey = appsQueryKeys.all();
    expect(allKey).toEqual(['apps']);
  });

  it('should return the app key with the specified id', () => {
    const appId = '123';
    const appKey = appsQueryKeys.app(appId);
    expect(appKey).toEqual(['apps', appId]);
  });
});
