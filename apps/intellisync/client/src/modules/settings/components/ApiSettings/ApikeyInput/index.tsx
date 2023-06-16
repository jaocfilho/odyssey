import { serverSelectApikeyByOrganizationId } from '@/modules/api-keys/api/server';
import { getLastUsedOrganization } from '@/modules/organizations/helpers';
import { Input } from 'tailwind-ui';

async function getApikey() {
  const { lastUsedOrganization } = await getLastUsedOrganization();

  return await serverSelectApikeyByOrganizationId({
    organization_id: lastUsedOrganization,
  });
}

type ApikeyInputProps = {
  value: string;
};

export function ApikeyInput({ value }: ApikeyInputProps) {
  return (
    <Input label="API key" value={value} name="apiKey" disabled hasCopyButton />
  );
}
