import { Organization } from '../Organization';
import { getLastUsedOrganization } from '@/modules/organizations/helpers';

export async function OrganizationArea() {
  const { lastUsedOrganization } = await getLastUsedOrganization();

  return (
    <div className="flex">
      <div className="flex items-center space-x-4">
        <Organization organizationId={lastUsedOrganization} />
      </div>
    </div>
  );
}
