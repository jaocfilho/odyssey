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
});
