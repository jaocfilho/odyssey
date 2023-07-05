import { describe, expect, it } from 'vitest';

import { authUrls } from '.';

describe('authUrls', () => {
  it('should have the correct login url', () => {
    expect(authUrls.login).toBe('/login');
  });

  it('should have the correct register url', () => {
    expect(authUrls.register).toBe('/register');
  });
});
