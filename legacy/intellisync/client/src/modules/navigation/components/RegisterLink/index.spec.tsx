import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RegisterLink } from '.';

describe('RegisterLink', () => {
  it('should have the correct href', () => {
    render(<RegisterLink>register</RegisterLink>);

    expect(screen.getByText('register')).toHaveAttribute('href', '/register');
  });
});
