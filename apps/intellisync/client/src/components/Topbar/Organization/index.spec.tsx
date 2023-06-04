import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Organization } from '.';
import { serverSelectOrganizationById } from '@/modules/organizations/api/server';
import { ClientComponent } from './ClientComponent';

afterEach(() => {
  cleanup();
});

vi.mock('@/modules/organizations/api/server', () => ({
  serverSelectOrganizationById: vi.fn(() => ({
    data: { name: 'Example Organization' },
  })),
}));

vi.mock('./ClientComponent', () => ({
  ClientComponent: vi.fn(() => <div>Client Component</div>),
}));

describe('Organization', () => {
  it('should pass the correct params to serverSelectOrganizationById on render', async () => {
    render(await Organization({ organizationId: '1' }));

    expect(serverSelectOrganizationById).toHaveBeenCalledWith({ id: '1' });
  });
});
