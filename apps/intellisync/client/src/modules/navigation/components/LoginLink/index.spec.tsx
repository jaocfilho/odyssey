import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LoginLink } from '.';

describe('LoginLink', () => {
  it('should have the correct href', () => {
    render(<LoginLink>login</LoginLink>);

    expect(screen.getByText('login')).toHaveAttribute('href', '/login');
  });
});
