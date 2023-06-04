import { queryClient } from '@/lib/react-query/client';
import { currentQueryKey } from '../query-keys';
import { BaseSelectOrganizationByIdReturnData } from '../api/base';

export function setCurrentOrganization(
  initialData: BaseSelectOrganizationByIdReturnData
) {
  const queryKey = currentQueryKey();
  return queryClient.setQueryData(queryKey, initialData);
}

export function getCurrentOrganization() {
  const queryKey = currentQueryKey();
  return queryClient.getQueryData<BaseSelectOrganizationByIdReturnData>(
    queryKey
  );
}
