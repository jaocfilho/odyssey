'use client';

import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { useIsSettingsApiPath } from '@/modules/settings/hooks/use-is-settings-api-path';

export function ApiSidebarItem() {
  const current = useIsSettingsApiPath();

  return <SecondarySidebarItem current={current}>API</SecondarySidebarItem>;
}
