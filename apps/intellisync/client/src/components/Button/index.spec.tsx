import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from '.';

describe('Button', () => {
  it('should render as a button if no href is passed', () => {
    render(<Button>any</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render as a link if href is passed', () => {
    render(<Button href="/">any</Button>);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
