import { render } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { JsonView } from '.';

describe('JsonView', () => {
  it('should render', () => {
    const value = 'test';
    const { container } = render(<JsonView value={value} />);

    expect(container).toBeInTheDocument();
  });
});
