import { serverSelectOrganizationById } from '@/modules/organizations/api/server';
import { ClientComponent } from './ClientComponent';

type OrganizationProps = {
  organizationId: string;
};

export async function Organization({ organizationId }: OrganizationProps) {
  const { data } = await serverSelectOrganizationById({
    id: organizationId,
  });

  return <ClientComponent organizationId={organizationId} initialData={data} />;
}
