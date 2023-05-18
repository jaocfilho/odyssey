import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { DetailsHeader } from '.';

describe('DetailsHeader', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the name', () => {
    render(<DetailsHeader name="anyName" model="anyModel" />);
    expect(screen.getByText('anyName')).toBeInTheDocument();
  });

  it('should render the model', () => {
    render(<DetailsHeader name="anyName" model="anyModel" />);
    expect(screen.getByText('anyModel')).toBeInTheDocument();
  });
});
