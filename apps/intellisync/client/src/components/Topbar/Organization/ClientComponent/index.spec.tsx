import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { BaseComponent, ClientComponent } from '.';
import { setCurrentOrganization } from '@/modules/organizations/helpers';
import { useSelectOrganizationById } from '@/modules/organizations/hooks/use-select-organization-by-id';

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

vi.mock('@/modules/organizations/helpers', () => ({
  setCurrentOrganization: vi.fn(),
}));

vi.mock('@/modules/organizations/hooks/use-select-organization-by-id', () => ({
  useSelectOrganizationById: vi.fn(() => ({
    data: { name: 'any' },
  })),
}));

describe('ClientComponent', () => {
  const initialData = {
    id: 'any',
    name: 'any',
    owner: 'any',
    created_at: 'any',
    updated_at: 'any',
    created_by: 'any',
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should call setCurrentOrganization on render', () => {
    render(<ClientComponent organizationId="1" initialData={initialData} />);

    const organizationQuery = useSelectOrganizationById(
      { id: '1' },
      { initialData }
    );
    expect(setCurrentOrganization).toHaveBeenCalledWith(organizationQuery.data);
  });

  it('should render the organization name', () => {
    render(<ClientComponent organizationId="1" initialData={initialData} />);

    const organizationElement = screen.getByText('any');
    expect(organizationElement).toBeInTheDocument();
  });
});
