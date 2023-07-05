import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CurrentOrganization } from '.';

vi.mock('@/modules/organizations/hooks/use-current-organization', () => ({
  useCurrentOrganization: vi.fn(() => ({
    data: { name: 'any' },
  })),
}));

describe('CurrentOrganization', () => {
  it('should render the organization name', () => {
    render(<CurrentOrganization />);

    const organizationElement = screen.getByText('any');
    expect(organizationElement).toBeInTheDocument();
  });
});
