import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ApikeyInput } from '.';
import { serverSelectApikeyByOrganizationId } from '@/modules/api-keys/api/server';
import { getLastUsedOrganization } from '@/modules/organizations/helpers/server';

vi.mock('@/modules/api-keys/api/server', () => ({
  serverSelectApikeyByOrganizationId: vi.fn(() => ({
    data: { key_value: 'anyValue' },
  })),
}));

vi.mock('@/modules/organizations/helpers/server', () => ({
  getLastUsedOrganization: vi.fn(() => ({
    lastUsedOrganization: 'anyOrganization',
  })),
}));

describe('ApikeyInput', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the api key', async () => {
    render(await ApikeyInput());

    const textbox = screen.getByLabelText('API key');
    expect(textbox).toHaveValue('anyValue');
  });

  it('should render the correct label', async () => {
    render(await ApikeyInput());

    const textbox = screen.getByLabelText('API key');
    expect(textbox).toBeInTheDocument();
  });

  it('should render the copy button', async () => {
    render(await ApikeyInput());

    const copyButton = screen.getByTestId('copy-icon');
    expect(copyButton).toBeInTheDocument();
  });

  it('should be disabled', async () => {
    render(await ApikeyInput());

    const textbox = screen.getByLabelText('API key');
    expect(textbox).toBeDisabled();
  });

  it('should call the serverSelectApikeyByOrganizationId function', async () => {
    render(await ApikeyInput());

    expect(serverSelectApikeyByOrganizationId).toHaveBeenCalledWith({
      organization_id: 'anyOrganization',
    });
  });

  it('should call the getLastUsedOrganization function', async () => {
    render(await ApikeyInput());

    expect(getLastUsedOrganization).toHaveBeenCalled();
  });
});
