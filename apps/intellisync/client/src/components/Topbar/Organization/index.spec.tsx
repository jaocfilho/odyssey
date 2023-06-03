import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Organization } from '.';

describe('Organization', () => {
  it('renders the organization name', () => {
    const organizationName = 'Example Organization';
    render(<Organization name={organizationName} />);
    const organizationElement = screen.getByText(organizationName);
    expect(organizationElement).toBeInTheDocument();
  });
});
