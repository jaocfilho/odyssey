'use client';

import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SettingsApiLink } from '@/modules/navigation/components/SettingsApiLink';
import { useIsSettingsUsagePath } from '@/modules/settings/hooks/use-is-settings-usage-path';

export function UsageSidebarItem() {
  const current = useIsSettingsUsagePath();

  return (
    <SettingsApiLink>
      <SecondarySidebarItem current={current}>Usage</SecondarySidebarItem>
    </SettingsApiLink>
  );
}
