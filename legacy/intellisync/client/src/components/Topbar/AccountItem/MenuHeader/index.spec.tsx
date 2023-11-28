import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MenuHeader } from '.';

describe('MenuHeader', () => {
  const email = 'any@email.com';

  it('should render the email', () => {
    render(<MenuHeader email={email} />);

    const element = screen.getByText(email);

    expect(element).toBeInTheDocument();
  });
});
