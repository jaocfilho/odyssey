import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DetailsHeader } from '.';

describe('DetailsHeader', () => {
  it('should render the name', () => {
    render(<DetailsHeader name="anyName" />);
    expect(screen.getByText('anyName')).toBeInTheDocument();
  });
});
