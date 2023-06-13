'use client';

import { setCurrentOrganization } from '@/modules/organizations/helpers';
import {
  useSelectOrganizationById,
  type UseSelectOrganizationByIdOptions,
} from '@/modules/organizations/hooks/use-select-organization-by-id';

type BaseComponentProps = {
  name: string;
};

export function BaseComponent({ name }: BaseComponentProps) {
  return (
    <p className="ml-4 text-sm font-medium cursor-pointer dark:text-zinc-500 dark:hover:text-zinc-400 leading-6">
      {name}
    </p>
  );
}

type ClientComponentProps = Pick<
  Required<UseSelectOrganizationByIdOptions>,
  'initialData'
> & {
  organizationId: string;
};

export function ClientComponent({
  organizationId,
  initialData,
}: ClientComponentProps) {
  const organizationQuery = useSelectOrganizationById(
    { id: organizationId },
    { initialData }
  );

  setCurrentOrganization(organizationQuery.data!);

  return <BaseComponent name={organizationQuery.data!.name} />;
}
