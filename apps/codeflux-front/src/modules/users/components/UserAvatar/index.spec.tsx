import { render } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { BaseUserAvatar } from '.';

describe('BaseUserAvatar', () => {
  it('should render', () => {
    const { container } = render(<BaseUserAvatar image="" name="" />);

    expect(container).toBeInTheDocument();
  });
});
