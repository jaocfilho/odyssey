import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Button } from '.';
import { assertButtonIsInTheDocument } from '@odyssey/tests';

describe('Button', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a button', () => {
    render(<Button>button</Button>);

    assertButtonIsInTheDocument('button');
  });

  it('should be disabled when loading is true', () => {
    render(<Button loading>button</Button>);

    assertButtonIsInTheDocument('button', { disabled: true });
  });

  it('should render a spinner when loading is true', () => {
    render(<Button loading>button</Button>);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should render the children with the spinner when loading is true', () => {
    render(<Button loading>button</Button>);

    expect(screen.getByRole('status')).toBeInTheDocument();
    assertButtonIsInTheDocument('button');
  });

  it('should render a spinner if loading is true and there is no children', () => {
    render(<Button loading />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should add margin to the spinner if there are children', () => {
    render(<Button loading>button</Button>);

    expect(screen.getByRole('status')).toHaveClass('mr-3');
  });

  it('should not add margin to the spinner if there are no children', () => {
    render(<Button loading />);

    expect(screen.getByRole('status')).not.toHaveClass('mr-3');
  });

  it('should be disabled when disabled is true', () => {
    render(<Button disabled>button</Button>);

    assertButtonIsInTheDocument('button', { disabled: true });
  });

  it('should render a link when href is provided', () => {
    render(<Button href="/link">button</Button>);

    expect(screen.getByRole('link', { name: 'button' })).toBeInTheDocument();
  });
});
