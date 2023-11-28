import { usePathname } from 'next/navigation';

import { isSettingsSubscriptionPath } from '../../urls';

export function useIsSettingsSubscriptionPath() {
  const pathname = usePathname();

  const isPath = isSettingsSubscriptionPath(pathname);
  return isPath;
}
