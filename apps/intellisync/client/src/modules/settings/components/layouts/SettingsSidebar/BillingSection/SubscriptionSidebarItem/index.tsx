'use client';

import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SettingsSubscriptionLink } from '@/modules/navigation/components/SettingsSubscriptionLink';
import { useIsSettingsSubscriptionPath } from '@/modules/settings/hooks/use-is-settings-subscription-path';

export function SubscriptionSidebarItem() {
  const current = useIsSettingsSubscriptionPath();

  return (
    <SettingsSubscriptionLink>
      <SecondarySidebarItem current={current}>
        Subscription
      </SecondarySidebarItem>
    </SettingsSubscriptionLink>
  );
}
