import { usePathname } from 'next/navigation';

import { isSettingsPath } from '../../urls';

export function useIsSettingsPath() {
  const pathname = usePathname();

  const isPath = isSettingsPath(pathname);
  return isPath;
}
