import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PersonasCount } from '.';

describe('PersonasCount', () => {
  it('should render the personas count', () => {
    render(<PersonasCount personasCount={0} />);
    const element = screen.getByText('Personas (0)');
    expect(element).toBeInTheDocument();
  });
});
