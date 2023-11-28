'use client';

import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SettingsApiLink } from '@/modules/navigation/components/SettingsApiLink';
import { useIsSettingsApiPath } from '@/modules/settings/hooks/use-is-settings-api-path';

export function ApiSidebarItem() {
  const current = useIsSettingsApiPath();

  return (
    <SettingsApiLink>
      <SecondarySidebarItem current={current}>API</SecondarySidebarItem>
    </SettingsApiLink>
  );
}
