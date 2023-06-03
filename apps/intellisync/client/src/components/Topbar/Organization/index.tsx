import { serverSelectOrganizationById } from '@/modules/organizations/api/server';

type BaseOrganizationProps = {
  name: string;
};

export function BaseOrganization({ name }: BaseOrganizationProps) {
  return (
    <p className="ml-4 text-sm font-medium cursor-pointer dark:text-zinc-500 dark:hover:text-zinc-400 leading-6">
      {name}
    </p>
  );
}

type OrganizationProps = {
  lastUsedOrganization: string;
};

export async function Organization({
  lastUsedOrganization,
}: OrganizationProps) {
  const { data } = await serverSelectOrganizationById({
    id: lastUsedOrganization,
  });

  return (
    <div className="flex items-center space-x-4">
      <BaseOrganization name={data!.name} />
    </div>
  );
}
