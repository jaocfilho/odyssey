import { usePathname } from 'next/navigation';

import { isSettingsUsagePath } from '../../urls';

export function useIsSettingsUsagePath() {
  const pathname = usePathname();

  const isPath = isSettingsUsagePath(pathname);
  return isPath;
}
