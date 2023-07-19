'use client';

import { useCurrentOrganization } from '@/modules/organizations/hooks/use-current-organization';

export function CurrentOrganization() {
  const organizationQuery = useCurrentOrganization();

  return (
    <div className="flex items-center">
      {organizationQuery.data && (
        <p className="text-sm font-medium cursor-pointer dark:text-grayScheme-500 dark:hover:text-grayScheme-400 leading-6">
          {organizationQuery.data.name}
        </p>
      )}
    </div>
  );
}
