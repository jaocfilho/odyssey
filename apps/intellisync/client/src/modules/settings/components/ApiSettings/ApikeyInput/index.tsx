import { serverSelectApikeyByOrganizationId } from '@/modules/api-keys/api/server';
import { getLastUsedOrganization } from '@/modules/organizations/helpers/server';
import { Input } from 'tailwind-ui';

async function getApikey() {
  const { lastUsedOrganization } = await getLastUsedOrganization();

  return await serverSelectApikeyByOrganizationId({
    organization_id: lastUsedOrganization,
  });
}

export async function ApikeyInput() {
  const { data } = await getApikey();

  return (
    <Input
      label="API key"
      value={data?.key_value}
      name="apiKey"
      disabled
      hasCopyButton
    />
  );
}
