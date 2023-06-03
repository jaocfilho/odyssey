import { usePathname, useParams } from 'next/navigation';

import { isAppsPath } from '../../helpers';

export function useIsCurrentApp(appId: string) {
  const pathname = usePathname();
  const params = useParams();

  const isPath = isAppsPath(pathname);

  if (!isPath) return false;

  const { id } = params;
  return appId === id;
}
