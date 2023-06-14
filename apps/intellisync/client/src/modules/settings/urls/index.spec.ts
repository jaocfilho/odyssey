import { describe, expect, it } from 'vitest';

import { isSettingsPath, settingsUrls } from '.';

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

describe('settingsUrls', () => {
  it('should return base url', () => {
    const result = settingsUrls.base;
    expect(result).toBe('/dashboard/settings');
  });
});
