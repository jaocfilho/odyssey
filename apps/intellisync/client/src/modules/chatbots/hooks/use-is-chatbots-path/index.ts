import { usePathname } from 'next/navigation';

import { isChatbotsPath } from '../../urls';

export function useIsChatbotsPath() {
  const pathname = usePathname();

  const isPath = isChatbotsPath(pathname);
  return isPath;
}
