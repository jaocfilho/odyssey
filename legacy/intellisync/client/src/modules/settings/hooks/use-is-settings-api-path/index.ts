import { usePathname } from 'next/navigation';

import { isSettingsApiPath } from '../../urls';

export function useIsSettingsApiPath() {
  const pathname = usePathname();

  const isPath = isSettingsApiPath(pathname);
  return isPath;
}
