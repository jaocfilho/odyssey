'use client';

import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SettingsApiLink } from '@/modules/navigation/components/SettingsApiLink';
import { useIsSettingsSubscriptionPath } from '@/modules/settings/hooks/use-is-settings-subscription-path';

export function SubscriptionSidebarItem() {
  const current = useIsSettingsSubscriptionPath();

  return (
    <SettingsApiLink>
      <SecondarySidebarItem current={current}>
        Subscription
      </SecondarySidebarItem>
    </SettingsApiLink>
  );
}
