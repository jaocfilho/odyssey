import { beforeEach, describe, expect, it, vi } from 'vitest';

import { classNames } from 'tailwind-ui';
import { getStyles, navItemStyles } from '.';

vi.mock('tailwind-ui', () => ({
  classNames: vi.fn(),
}));

describe('NavItem', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should return the correct styles when current is true', () => {
    getStyles(true);
    expect(classNames).toHaveBeenCalledWith(
      navItemStyles.currentItemStyles,
      navItemStyles.commonStyles
    );
  });

  it('should return the correct styles when current is false', () => {
    getStyles(false);
    expect(classNames).toHaveBeenCalledWith(
      navItemStyles.notCurrentStyles,
      navItemStyles.commonStyles
    );
  });
});
