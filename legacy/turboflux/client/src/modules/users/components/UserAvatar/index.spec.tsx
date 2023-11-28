import { render } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { BaseUserAvatar } from '.';

describe('BaseUserAvatar', () => {
  it('should render', () => {
    const { container } = render(<BaseUserAvatar image="" name="" />);

    expect(container).toBeInTheDocument();
  });
});

// TODO write tests
describe('UserAvatar', () => {
  it('should render empty if user is null');
  it('should pass user properties to base component');
});
