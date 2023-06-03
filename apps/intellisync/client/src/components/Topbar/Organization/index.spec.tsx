import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { BaseOrganization, Organization } from '.';
import { serverSelectOrganizationById } from '@/modules/organizations/api/server';

afterEach(() => {
  cleanup();
});

describe('BaseOrganization', () => {
  it('renders the organization name', () => {
    const organizationName = 'Example Organization';
    render(<BaseOrganization name={organizationName} />);
    const organizationElement = screen.getByText(organizationName);
    expect(organizationElement).toBeInTheDocument();
  });
});

vi.mock('@/modules/organizations/api/server', () => ({
  serverSelectOrganizationById: vi.fn(() => ({
    data: { name: 'Example Organization' },
  })),
}));

describe('Organization', () => {
  it('should pass the correct params to serverSelectOrganizationById on render', async () => {
    render(await Organization({ lastUsedOrganization: '1' }));

    expect(serverSelectOrganizationById).toHaveBeenCalledWith({ id: '1' });
  });

  it('should render the returned organization name', async () => {
    render(await Organization({ lastUsedOrganization: '1' }));

    const organizationElement = screen.getByText('Example Organization');
    expect(organizationElement).toBeInTheDocument();
  });
});
