import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { BaseComponent } from '.';

afterEach(() => {
  cleanup();
});

describe('BaseComponent', () => {
  it('renders the organization name', () => {
    const organizationName = 'Example Organization';
    render(<BaseComponent name={organizationName} />);
    const organizationElement = screen.getByText(organizationName);
    expect(organizationElement).toBeInTheDocument();
  });
});
