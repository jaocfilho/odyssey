import { describe, expect, it } from 'vitest';

import {
  isSettingsApiPath,
  isSettingsPath,
  isSettingsSubscriptionPath,
  isSettingsUsagePath,
  settingsUrls,
} from '.';

describe('isSettingsPath', () => {
  it('should return true if pathname is settings', () => {
    const pathname = '/dashboard/settings';
    const result = isSettingsPath(pathname);
    expect(result).toBe(true);
  });

  it('should return false if pathname is not settings', () => {
    const pathname = '/dashboard/other';
    const result = isSettingsPath(pathname);
    expect(result).toBe(false);
  });
});

describe('isSettingsApiPath', () => {
  it('should return true if pathname is settings api', () => {
    const pathname = '/dashboard/settings/api';
    const result = isSettingsApiPath(pathname);
    expect(result).toBe(true);
  });

  it('should return false if pathname is not settings api', () => {
    const pathname = '/dashboard/settings';
    const result = isSettingsApiPath(pathname);
    expect(result).toBe(false);
  });
});

describe('isSettingsSubscriptionPath', () => {
  it('should return true if pathname is settings subscription', () => {
    const pathname = '/dashboard/settings/subscription';
    const result = isSettingsSubscriptionPath(pathname);
    expect(result).toBe(true);
  });

  it('should return false if pathname is not settings subscription', () => {
    const pathname = '/dashboard/settings';
    const result = isSettingsSubscriptionPath(pathname);
    expect(result).toBe(false);
  });
});

describe('isSettingsUsagePath', () => {
  it('should return true if pathname is settings usage', () => {
    const pathname = '/dashboard/settings/usage';
    const result = isSettingsUsagePath(pathname);
    expect(result).toBe(true);
  });

  it('should return false if pathname is not settings usage', () => {
    const pathname = '/dashboard/settings';
    const result = isSettingsUsagePath(pathname);
    expect(result).toBe(false);
  });
});

describe('settingsUrls', () => {
  it('should return base url', () => {
    const result = settingsUrls.base;
    expect(result).toBe('/dashboard/settings');
  });

  it('should return api url', () => {
    const result = settingsUrls.api();
    expect(result).toBe('/dashboard/settings/api');
  });

  it('should return subscription url', () => {
    const result = settingsUrls.subscription();
    expect(result).toBe('/dashboard/settings/subscription');
  });

  it('should return usage url', () => {
    const result = settingsUrls.usage();
    expect(result).toBe('/dashboard/settings/usage');
  });
});
