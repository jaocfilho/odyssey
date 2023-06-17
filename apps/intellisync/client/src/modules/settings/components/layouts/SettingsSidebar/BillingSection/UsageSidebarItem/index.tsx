'use client';

import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SettingsUsageLink } from '@/modules/navigation/components/SettingsUsageLink';
import { useIsSettingsUsagePath } from '@/modules/settings/hooks/use-is-settings-usage-path';

export function UsageSidebarItem() {
  const current = useIsSettingsUsagePath();

  return (
    <SettingsUsageLink>
      <SecondarySidebarItem current={current}>Usage</SecondarySidebarItem>
    </SettingsUsageLink>
  );
}
